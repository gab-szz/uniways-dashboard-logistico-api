import type { FastifyInstance } from 'fastify';
import type { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { ListarPremiacoesUseCase } from './use-cases/listarPremiacoes.use-case.js';
import { ListarPremiacoesSchema } from './dtos/listar-premiacoes.dto.js';
import { MssqlPremiacoesRepository } from './infra/mssql.premiacoes.repository.js';
import { ConsultarPorHandleMotoristaUseCase } from './use-cases/consultar-por-handle-motorista.use-case.js';
import {
  HandleParamSchema,
  ListarPremiacoesResponseSchema,
  PremiacaoItemSchema,
} from './types.js';

export default function premiacoesRoutes(app: FastifyInstance) {
  const router = app.withTypeProvider<ZodTypeProvider>();

  // Injeção de Classes
  const repository = new MssqlPremiacoesRepository();
  const listarUseCase = new ListarPremiacoesUseCase(repository);
  const consultarPorMotoristaUseCase = new ConsultarPorHandleMotoristaUseCase(repository);

  /** GET - consulta as premiações filtrando apenas por data */
  router.get(
    '/',
    {
      schema: {
        tags: ['Premiações'],
        summary: 'Listar todas as premiações',
        description:
          'Retorna o sumário consolidado e a lista detalhada de premiações por motorista no período informado. Utiliza cache Redis; faz fallback para o banco de dados caso o cache esteja frio.',
        querystring: ListarPremiacoesSchema,
        response: { 200: ListarPremiacoesResponseSchema },
      },
    },
    async (request, reply) => {
      const { dtini, dtfim } = request.query;
      const premiacoes = await listarUseCase.exec({ dtini, dtfim });
      return reply.status(200).send(premiacoes);
    },
  );

  /** GET - consulta a premiação de um motorista específico */
  router.get(
    '/motorista/:handle',
    {
      schema: {
        tags: ['Premiações'],
        summary: 'Consultar premiação por motorista',
        description:
          'Retorna o detalhamento da premiação de um motorista específico no período informado.',
        querystring: ListarPremiacoesSchema,
        params: HandleParamSchema,
        response: {
          200: PremiacaoItemSchema,
          404: z.object({ mensagem: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const { dtini, dtfim } = request.query;
      const { handle } = request.params;

      const premiacao = await consultarPorMotoristaUseCase.exec({ dtini, dtfim, handle });

      if (!premiacao) {
        return reply
          .status(404)
          .send({ mensagem: 'Motorista não encontrado no período informado' });
      }

      return reply.status(200).send(premiacao);
    },
  );
}
