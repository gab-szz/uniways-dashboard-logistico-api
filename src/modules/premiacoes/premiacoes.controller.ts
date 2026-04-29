import type { FastifyInstance } from 'fastify';
import type { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { ListarPremiacoesUseCase } from './use-cases/listarPremiacoes.use-case.js';
import { ListarPremiacoesSchema } from './dtos/listar-premiacoes.dto.js';
import { MssqlPremiacoesRepository } from './infra/mssql.premiacoes.repository.js';
import { ConsultarPorHandleMotoristaUseCase } from './use-cases/consultar-por-handle-motorista.use-case.js';

const HandleParamSchema = z.object({
  handle: z.coerce.number().int().min(1).describe('Handle (ID) do motorista'),
});

const PremiacaoItemSchema = z.object({
  handle_motorista: z.number(),
  nome: z.string(),
  total_viagens: z.number(),
  finalizadas_total: z.number(),
  finalizadas_ravex: z.number(),
  ton_geral: z.number(),
  premiacao_por_ton: z.number().optional(),
  volume_geral: z.number(),
  total_notas_emitidas: z.number(),
  total_notas_premiacao: z.number(),
  qtd_entregas_realizadas: z.number(),
  premiacao_por_entrega: z.number().optional(),
  ton_entregue_real: z.number(),
  total_notas_entregues: z.number(),
  ton_devolvida: z.number(),
  total_notas_devolvidas: z.number(),
});

const SumarioSchema = z.object({
  total_premiacao: z.number(),
  peso_total_ton: z.number(),
  ton_entregue_real: z.number(),
  ton_devolvida: z.number(),
  total_viagens: z.number(),
  qtd_entregas_realizadas: z.number(),
});

const ListarPremiacoesResponseSchema = z.object({
  sumario: SumarioSchema,
  premiacoes: z.array(PremiacaoItemSchema),
});

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
      },
    },
    async (request, reply) => {
      const { dtini, dtfim } = request.query;
      const { handle } = request.params;

      const premiacoes = await consultarPorMotoristaUseCase.exec({
        dtini,
        dtfim,
        handle,
      });
      return reply.status(200).send(premiacoes);
    },
  );
}
