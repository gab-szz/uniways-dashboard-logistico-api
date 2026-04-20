import { Controller, GET, Inject } from 'fastify-decorators';
import type { FastifyRequest, FastifyReply } from 'fastify';
import { ListarPremiacoesUseCase } from './domain/use-cases/listarPremiacoes.use-case.js';
import { ListarPremiacoesSchema } from './dtos/listar-premiacoes.dto.js';
import z from 'zod';

@Controller({ route: '/premiacoes' })
export default class PremiacoesController {
  @Inject(ListarPremiacoesUseCase)
  private readonly listarUseCase!: ListarPremiacoesUseCase;

  // GET /premiacoes
  @GET({ url: '/' })
  async getStatus(request: FastifyRequest, reply: FastifyReply) {
    // Validação usando Zod
    const query = ListarPremiacoesSchema.safeParse(request.query);

    if (!query.success) {
      return reply.status(400).send({
        error: 'Parâmetros inválidos',
        details: z.treeifyError(query.error),
      });
    }

    const { dtini, dtfim } = query.data;
    const premiacoes = await this.listarUseCase.exec({ dtini, dtfim });

    return reply.status(200).send(premiacoes);
  }
}
