import { Inject, Service } from 'fastify-decorators';
import type { IPremiacoesRepository } from '../../infra/premiacoes.repository.js';
import { MssqlPremiacoesRepository } from '../../infra/mssql.premiacoes.repository.js';
import type { PremiacoesDto } from '../../dtos/premiacoes.dto.js';
import { obter } from '../../../../infra/cache/cache.js';
import { Logger } from '../../../../logger/logger.js';
import {
  CHAVE_PREMIACOES,
  unificarPremiacoes,
} from '../../../../jobs/premiacoes/premiacoes.job.js';

@Service()
export class ListarPremiacoesUseCase {
  @Inject(MssqlPremiacoesRepository)
  private readonly rep!: IPremiacoesRepository;

  constructor(rep?: IPremiacoesRepository) {
    if (rep) this.rep = rep;
  }

  async exec(params: {
    dtini: string;
    dtfim: string;
  }): Promise<PremiacoesDto[]> {
    // Tenta retornar do cache primeiro (caminho feliz)
    const cache = await obter<PremiacoesDto[]>(CHAVE_PREMIACOES);
    if (cache) {
      Logger.info(
        `[listarPremiacoes] Cache hit — retornando ${cache.length} motoristas do Redis`,
      );
      return cache;
    }

    // Fallback: consulta o banco caso o cache ainda não esteja aquecido
    Logger.warn(
      '[listarPremiacoes] Cache miss — consultando banco de dados como fallback',
    );

    const dtini = new Date(`${params.dtini}T00:00:00`);
    const dtfim = new Date(`${params.dtfim}T23:59:59`);

    if (isNaN(dtini.getTime()) || isNaN(dtfim.getTime())) {
      throw new Error('Datas inválidas. Use o formato YYYY-MM-DD.');
    }

    const dados = await unificarPremiacoes(this.rep, { dtini, dtfim });
    Logger.info(
      `[listarPremiacoes] Fallback concluído — ${dados.length} motoristas retornados`,
    );
    return dados;
  }
}
