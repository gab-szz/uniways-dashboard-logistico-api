import type { FastifyRequest, FastifyReply } from 'fastify';
export default class PerfilController {
    getStatus(_request: FastifyRequest, reply: FastifyReply): Promise<void>;
}
