import fastify from 'fastify';
import rateLimit from '@fastify/rate-limit';
import { guardMiddleware } from './middlewares/guard.middleware.js';
import motoristasRoutes from './modules/motorista/motorista.controller.js';
import premiacoesRoutes from './modules/premiacoes/premiacoes.controller.js';

const servidor = fastify();

servidor.register(rateLimit, {
  max: 30,
  timeWindow: '1 minute',
  allowList: [],
  keyGenerator: (req: any) => req.ip,
  errorResponseBuilder: (_req: any, context: any) => {
    return {
      mensagem: `Limite de requisições excedido. Tente novamente em alguns instantes.`,
      dados: [],
      limite: {
        max: context.max,
        timeWindow: context.timeWindow,
        ttl: context.ttl,
      },
    };
  },
});

servidor.addHook('onRequest', guardMiddleware);

servidor.register(motoristasRoutes, { prefix: '/motoristas' });
servidor.register(premiacoesRoutes, { prefix: '/premiacoes' });

export default servidor;
