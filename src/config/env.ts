import 'dotenv/config';
import z from 'zod';

const EnvSchema = z.object({
  AMBIENTE: z.enum(['dev', 'prod', 'test']).default('dev'),
  PORTA: z.coerce.number().default(3094),

  REDIS_URL: z.string().min(1),

  DB_HOST: z.string().min(1),
  DB_PORT: z.coerce.number().default(1433),
  DB_USER: z.string().min(1),
  DB_PASS: z.string().min(1),
  DB_DATABASE: z.string().min(1),
});

export const env = EnvSchema.parse(process.env);
