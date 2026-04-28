import type { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify';
import { ListarPremiacoesUseCase } from './use-cases/listarPremiacoes.use-case.js';
import { ListarPremiacoesSchema } from './dtos/listar-premiacoes.dto.js';
import z from 'zod';
import { MssqlPremiacoesRepository } from './infra/mssql.premiacoes.repository.js';
import { ConsultarPorHandleMotoristaUseCase } from './use-cases/consultar-por-handle-motorista.use-case.js';

const HandleSchema = z.object({
  handle: z.coerce.number().min(1),
});

export default function premiacoesRoutes(app: FastifyInstance) {
  // Injeção de Classes
  const repository = new MssqlPremiacoesRepository();
  const listarUseCase = new ListarPremiacoesUseCase(repository);
  const consultarPorMotoristaUseCase = new ConsultarPorHandleMotoristaUseCase(repository);

  /** GET - consulta as premiações filtrando apenas por data
   * @returns PremiacoesDto[] - Objeto com todos dados formatados e calculados
   */
  app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const filtros = ListarPremiacoesSchema.safeParse(request.query);

    if (!filtros.success) {
      return reply.status(400).send({
        error: 'Parâmetros inválidos',
        details: z.treeifyError(filtros.error),
      });
    }

    const { dtini, dtfim } = filtros.data;
    const premiacoes = await listarUseCase.exec({ dtini, dtfim });

    return reply.status(200).send(premiacoes);
  });

  /** GET - consulta as premiações filtrando apenas por data
   * @returns PremiacoesDto[] - Objeto com todos dados formatados e calculados
   */
  app.get('/motorista/:handle', async (request: FastifyRequest, reply: FastifyReply) => {
    const { dtini, dtfim } = _validarFiltros(request.query);
    const handle = _validarHandleParam(request.params);

    const premiacoes = await consultarPorMotoristaUseCase.exec({ dtini, dtfim, handle });

    return reply.status(200).send(premiacoes);
  });
}

function _validarFiltros(query: unknown) {
  const resultado = ListarPremiacoesSchema.safeParse(query);
  if (!resultado.success) {
    throw {
      status: 400,
      message: 'Parâmetros inválidos',
      details: z.treeifyError(resultado.error),
    };
  }
  return resultado.data;
}

function _validarHandleParam(param: unknown) {
  const paramParsed = HandleSchema.safeParse(param);

  if (!paramParsed.success) {
    throw {
      status: 400,
      message: 'Informe o handle do motorista nos parâmetros da requisição',
      details: z.treeifyError(paramParsed.error),
    };
  }
  return paramParsed.data.handle;
}
