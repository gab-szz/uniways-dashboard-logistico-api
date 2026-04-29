import z from 'zod';

export const HandleParamSchema = z.object({
  handle: z
    .string()
    .regex(/^\d+$/, 'Deve ser um número inteiro positivo')
    .transform(Number)
    .describe('Handle (ID) do motorista'),
});

export const PremiacaoItemSchema = z.object({
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

export const SumarioSchema = z.object({
  total_premiacao: z.number(),
  peso_total_ton: z.number(),
  ton_entregue_real: z.number(),
  ton_devolvida: z.number(),
  total_viagens: z.number(),
  qtd_entregas_realizadas: z.number(),
});

export const ListarPremiacoesResponseSchema = z.object({
  sumario: SumarioSchema,
  premiacoes: z.array(PremiacaoItemSchema),
});
