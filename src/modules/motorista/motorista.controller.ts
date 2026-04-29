import type { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify';
import type { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { ListarMotoristasUseCase } from './use-cases/listarMotoristas.use-case.js';
import { MssqlMotoristaRepository } from './infra/mssql.motorista.repository.js';

const MotoristaSchema = z.object({
  handle: z.number().int().describe('Identificador único do motorista'),
  nome: z.string().nullable().describe('Nome completo do motorista'),
});

export default function motoristasRoutes(app: FastifyInstance) {
  const repository = new MssqlMotoristaRepository();
  const listarUseCase = new ListarMotoristasUseCase(repository);

  app.withTypeProvider<ZodTypeProvider>().get(
    '/',
    {
      schema: {
        tags: ['Motoristas'],
        summary: 'Listar todos os motoristas',
        description: 'Retorna a lista completa de motoristas cadastrados.',
        response: { 200: z.array(MotoristaSchema) },
      },
    },
    async (_request: FastifyRequest, reply: FastifyReply) => {
      const motoristas = await listarUseCase.exec();
      reply.status(200).send(motoristas);
    },
  );
}
