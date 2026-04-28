import type { IPremiacoesRepository } from '../infra/premiacoes.repository.js';
import type { PremiacoesDto } from '../dtos/premiacoes.dto.js';
import { obter, salvar } from '../../../infra/cache/cache.js';
import { Logger } from '../../../logger/logger.js';
import { chaveCachePremiacoes } from '../../../jobs/premiacoes/consts.js';
import { PremiacoesJob } from '../../../jobs/premiacoes/premiacoes.job.js';

export class ListarPremiacoesUseCase {
  private readonly rep: IPremiacoesRepository;

  constructor(rep: IPremiacoesRepository) {
    this.rep = rep;
  }

  async exec(params: { dtini: string; dtfim: string }): Promise<PremiacoesDto[]> {
    const chave = chaveCachePremiacoes(params.dtini, params.dtfim);

    const dadosCache = await this._consultarNoCache(chave);
    if (dadosCache) {
      return dadosCache;
    }

    return await this._fallbackConsultarNoBanco(params, chave);
  }

  /**
   *
   * @returns PremiacoesDto[] -> Dados da premiação ou lista vazia
   */
  private async _consultarNoCache(chave: string): Promise<PremiacoesDto[] | null> {
    const cache = await obter<PremiacoesDto[]>(chave);
    if (cache) {
      Logger.info(
        `[listarPremiacoes] Cache hit — retornando ${cache.length} motoristas do Redis`,
      );
      return cache;
    }
    Logger.warn(
      `[listarPremiacoes] Cache miss (${chave}) — consultando banco de dados como fallback`,
    );
    return null;
  }

  /**
   *
   * @param params -> Data inicial e final para consulta
   * @returns PremiacoesDto[] -> Dados da premiação ou lista vazia
   */
  private async _fallbackConsultarNoBanco(
    params: { dtini: string; dtfim: string },
    chave: string,
  ): Promise<PremiacoesDto[]> {
    const dtini = new Date(`${params.dtini}T00:00:00`);
    const dtfim = new Date(`${params.dtfim}T23:59:59`);

    if (isNaN(dtini.getTime()) || isNaN(dtfim.getTime())) {
      throw new Error('Datas inválidas. Use o formato YYYY-MM-DD.');
    }

    const dados = await new PremiacoesJob(this.rep).exec({ dtini, dtfim });
    await salvar(chave, dados);
    Logger.info(
      `[listarPremiacoes] Fallback concluído — ${dados.length} motoristas retornados e cache populado (${chave})`,
    );
    return dados;
  }
}
