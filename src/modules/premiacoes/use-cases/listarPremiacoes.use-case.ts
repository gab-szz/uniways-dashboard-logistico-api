import type { IPremiacoesRepository } from '../infra/premiacoes.repository.js';
import type { PremiacoesDTO, SumarioDTO } from '../dtos/premiacoes.dto.js';
import { obter, salvar } from '../../../infra/cache/cache.js';
import { Logger } from '../../../logger/logger.js';
import { chaveCachePremiacoes } from '../../../jobs/premiacoes/consts.js';
import { PremiacoesJob } from '../../../jobs/premiacoes/premiacoes.job.js';
import { Premiacao } from '../domain/premiacoes.domain.js';

export class ListarPremiacoesUseCase {
  private readonly rep: IPremiacoesRepository;

  constructor(rep: IPremiacoesRepository) {
    this.rep = rep;
  }

  async exec(params: {
    dtini: string;
    dtfim: string;
  }): Promise<{ sumario: SumarioDTO; premiacoes: Premiacao[] }> {
    const chave = chaveCachePremiacoes(params.dtini, params.dtfim);

    const dadosBrutos =
      (await this._consultarNoCache(chave)) ||
      (await this._fallbackConsultarNoBanco(params, chave));

    const premiacoes = this._instanciarEDetalhar(dadosBrutos);
    const sumario = Premiacao.gerarSumario(premiacoes);
    return { sumario, premiacoes };
  }

  /**
   *
   * @returns PremiacoesDto[] -> Dados da premiação ou lista vazia
   */
  private async _consultarNoCache(chave: string): Promise<PremiacoesDTO[] | null> {
    const cache = await obter<PremiacoesDTO[]>(chave);
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
  ): Promise<PremiacoesDTO[]> {
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

  private _instanciarEDetalhar(dados: PremiacoesDTO[]): Premiacao[] {
    return dados.map((item) => {
      const premiacao = new Premiacao(item);
      premiacao.calcularPremiacoes();
      return premiacao;
    });
  }
}
