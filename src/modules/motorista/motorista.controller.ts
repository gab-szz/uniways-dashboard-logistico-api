import { Controller, GET, Inject } from 'fastify-decorators';
import type { FastifyRequest, FastifyReply } from 'fastify';
import { ListarMotoristasUseCase } from './domain/use-cases/listarMotoristas.use-case.js';

@Controller({ route: '/motoristas' })
export default class MotoristaController {
  @Inject(ListarMotoristasUseCase)
  private listarMotoristasUseCase!: ListarMotoristasUseCase;

  // GET /motoristas
  @GET({ url: '/' })
  async listar(_request: FastifyRequest, reply: FastifyReply) {
    const motoristas = await this.listarMotoristasUseCase.execute();
    reply.send(motoristas);
  }
}
