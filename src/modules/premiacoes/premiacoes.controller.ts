import { Controller, GET, Inject } from 'fastify-decorators';
import type { FastifyRequest, FastifyReply } from 'fastify';
import { ListarPremiacoesUseCase } from './use-cases/listarPremiacoes.use-case.js';
import { ListarPremiacoesSchema } from './dtos/listar-premiacoes.dto.js';
import z from 'zod';

@Controller({ route: '/premiacoes' })
export default class PremiacoesController {
  @Inject(ListarPremiacoesUseCase)
  private readonly listarUseCase!: ListarPremiacoesUseCase;

  @GET({ url: '/' })
  async getStatus(request: FastifyRequest, reply: FastifyReply) {
    const filtros = ListarPremiacoesSchema.safeParse(request.query);

    if (!filtros.success) {
      return reply.status(400).send({
        error: 'Parâmetros inválidos',
        details: z.treeifyError(filtros.error),
      });
    }

    const { dtini, dtfim } = filtros.data;
    const premiacoes = await this.listarUseCase.exec({ dtini, dtfim });

    return reply.status(200).send(premiacoes);
  }
}
