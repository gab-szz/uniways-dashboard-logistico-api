import { Controller, GET } from 'fastify-decorators';
import type { FastifyRequest, FastifyReply } from 'fastify';

@Controller({ route: '/premiacoes' })
export default class PremiacoesController {
  // GET /premiacoes/status
  @GET({ url: '/status' })
  async getStatus(_request: FastifyRequest, reply: FastifyReply) {
    reply.status(200).send({ status: 'online' });
  }
}
