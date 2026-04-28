import type { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify';
import { ListarPremiacoesUseCase } from './use-cases/listarPremiacoes.use-case.js';
import { ListarPremiacoesSchema } from './dtos/listar-premiacoes.dto.js';
import z from 'zod';
import { MssqlPremiacoesRepository } from './infra/mssql.premiacoes.repository.js';

export default function premiacoesRoutes(app: FastifyInstance) {
  const repository = new MssqlPremiacoesRepository();
  const listarUseCase = new ListarPremiacoesUseCase(repository);

  app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const filtros = ListarPremiacoesSchema.safeParse(request.query);

    if (!filtros.success) {
      return reply.status(400).send({
        error: 'Parâmetros inválidos',
        details: z.treeifyError(filtros.error),
      });
    }

    const { dtini, dtfim } = filtros.data;
    const premiacoes = await listarUseCase.exec({ dtini, dtfim });

    return reply.status(200).send(premiacoes);
  });
}
