import { FastifyReply, FastifyRequest } from 'fastify';
import { Logger } from '../logger/logger.js';
import { env } from '../config/env.js';

const rotasPublicas = ['/docs'];

export async function guardMiddleware(request: FastifyRequest, reply: FastifyReply) {
  const rota = request.routeOptions?.url ?? '';

  if (rotasPublicas.some((prefixo) => rota.startsWith(prefixo))) {
    return;
  }

  const metodo = request.method;
  const token = request.headers['x-app-token'];
  const ip = request.ip;

  if (!token || token !== env.TOKEN) {
    Logger.error(
      `🛑 Acesso bloqueado - credenciais ausentes.\n` +
        `Req: ${metodo}:${rota}\nIP: ${ip}\nHeaders: ${JSON.stringify(request.headers)}`,
    );
    return reply.status(401).send({ mensagem: 'Credenciais ausentes' });
  }
}
