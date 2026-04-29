import z from 'zod';

export const MotoristaSchema = z.object({
  handle: z.number().int().describe('Identificador único do motorista'),
  nome: z.string().nullable().describe('Nome completo do motorista'),
});
export type MotoristaDTO = z.infer<typeof MotoristaSchema>;
