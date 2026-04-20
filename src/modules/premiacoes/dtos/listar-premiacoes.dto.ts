import { z } from 'zod';

export const ListarPremiacoesSchema = z.object({
  dtini: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Formato inválido. Use YYYY-MM-DD'),
  dtfim: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Formato inválido. Use YYYY-MM-DD'),
});

export type ListarPremiacoesInput = z.infer<typeof ListarPremiacoesSchema>;
