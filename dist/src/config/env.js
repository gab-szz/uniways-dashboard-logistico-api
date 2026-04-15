import z from 'zod';
const EnvSchema = z.object({
    AMBIENTE: z.enum(['dev', 'prod', 'test']).default('dev'),
    PORTA: z.coerce.number().default(3094),
});
export const env = z.parse(EnvSchema, process.env);
//# sourceMappingURL=env.js.map