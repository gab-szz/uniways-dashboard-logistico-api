import { Controller, GET } from 'fastify-decorators';
import type { FastifyRequest, FastifyReply } from 'fastify';
import { PrismaMotoristaRepository } from './infra/prisma.motorista.repository.js';
import { ListarMotoristasUseCase } from './domain/use-cases/listarMotoristas.use-case.js';

@Controller({ route: '/motoristas' })
export default class MotoristaController {
  // GET /motoristas
  @GET({ url: '/' })
  async listar(_request: FastifyRequest, reply: FastifyReply) {
    const repo = new PrismaMotoristaRepository();
    const useCase = new ListarMotoristasUseCase(repo);
    const motoristas = await useCase.execute();
    reply.send(motoristas);
  }
}
