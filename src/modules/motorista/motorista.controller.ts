import type { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify';
import { ListarMotoristasUseCase } from './use-cases/listarMotoristas.use-case.js';
import { MssqlMotoristaRepository } from './infra/mssql.motorista.repository.js';

export default function motoristasRoutes(app: FastifyInstance) {
  const repository = new MssqlMotoristaRepository();
  const listarUseCase = new ListarMotoristasUseCase(repository);

  app.get('/', async (_request: FastifyRequest, reply: FastifyReply) => {
    const motoristas = await listarUseCase.exec();
    reply.status(200).send(motoristas);
  });
}
