import { salvar } from '../../infra/cache/cache.js';
import { Logger } from '../../logger/logger.js';
import {
  PremiacoesDto,
  ResumoDevolucoesDto,
  ResumoNotasFiscaisDto,
  ResumoNotasPesoDto,
  TotaisRomaneiosDto,
  TotaisViagemDto,
  TotalEntregasDto,
} from '../../modules/premiacoes/dtos/premiacoes.dto.js';
import { MssqlPremiacoesRepository } from '../../modules/premiacoes/infra/mssql.premiacoes.repository.js';
import {
  IPremiacoesRepository,
  PeriodoDTO,
} from '../../modules/premiacoes/infra/premiacoes.repository.js';
import { chaveCachePremiacoes, formatarData } from './consts.js';

export async function atualizarCachePremiacoes(): Promise<void> {
  Logger.info('[premiacoes.job] Iniciando atualização do cache...');

  const rep = new MssqlPremiacoesRepository();
  const hoje = new Date();
  const dtini = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
  const dtfim = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0, 23, 59, 59);

  Logger.info(
    `[premiacoes.job] Período: ${dtini.toLocaleDateString('pt-BR')} → ${dtfim.toLocaleDateString('pt-BR')}`,
  );

  const dados = await new PremiacoesJob(rep).exec({ dtini, dtfim });

  const chave = chaveCachePremiacoes(formatarData(dtini), formatarData(dtfim));
  await salvar(chave, dados);
  Logger.info(
    `[premiacoes.job] Cache atualizado: ${dados.length} motoristas — chave: ${chave}`,
  );
}

/**
 * Executa os 6 SQLs em paralelo e unifica os resultados em um array de `PremiacoesDto`, agrupado por motorista.
 */
export class PremiacoesJob {
  private TIMEOUT_MS = 5 * 60_000;
  private temporizador = new Promise<never>((_sucesso, rejeicao) =>
    setTimeout(
      () => rejeicao(new Error('Timeout: SQLs ultrapassaram 2 minutos')),
      this.TIMEOUT_MS,
    ),
  );

  constructor(private readonly rep: IPremiacoesRepository) {}

  async exec(periodo: PeriodoDTO): Promise<PremiacoesDto[]> {
    Logger.info(`[premiacoes.job] Executando 6 SQLs em paralelo...`);

    const { viagens, romaneios, notas, peso, devolucoes, entregas } =
      await this._executarConsultasSQL(periodo);

    const premiacaoPorMotoristaMap = new Map<number, PremiacoesDto>();

    PremiacoesJob._montarViagensPorMotorista(premiacaoPorMotoristaMap, viagens);
    PremiacoesJob._inserirRomaneios(premiacaoPorMotoristaMap, romaneios);
    PremiacoesJob._inserirNotasFiscais(premiacaoPorMotoristaMap, notas);
    PremiacoesJob._inserirPeso(premiacaoPorMotoristaMap, peso);
    PremiacoesJob._inserirDevolucoes(premiacaoPorMotoristaMap, devolucoes);
    PremiacoesJob._inserirEntregas(premiacaoPorMotoristaMap, entregas);

    // Calculado: premiação = entregues + devolvidas
    for (const motorista of premiacaoPorMotoristaMap.values()) {
      motorista.total_notas_premiacao =
        motorista.total_notas_entregues + motorista.total_notas_devolvidas;
    }

    return Array.from(premiacaoPorMotoristaMap.values());
  }

  /**
   * Função para executar os 6 SQLs em paralelo, utilizando a função `_registrar`.
   * @param periodo Período para o qual as consultas devem ser executadas
   * @returns Array contendo os resultados dos 6 SQLs, na ordem: viagens, romaneios, notas, peso, devolucoes, entregas
   */
  private async _executarConsultasSQL(periodo: PeriodoDTO) {
    const [viagens, romaneios, notas, peso, devolucoes, entregas] = await Promise.race([
      Promise.all([
        PremiacoesJob._registrar('totaisViagem', this.rep.totaisViagem(periodo)),
        PremiacoesJob._registrar('totaisRomaneios', this.rep.totaisRomaneios(periodo)),
        PremiacoesJob._registrar(
          'resumoNotasFiscais',
          this.rep.resumoNotasFiscais(periodo),
        ),
        PremiacoesJob._registrar('resumoNotasPeso', this.rep.resumoNotasPeso(periodo)),
        PremiacoesJob._registrar('resumoDevolucoes', this.rep.resumoDevolucoes(periodo)),
        PremiacoesJob._registrar('totalEntregas', this.rep.totalEntregas(periodo)),
      ]),
      this.temporizador,
    ]);

    Logger.info(
      `[premiacoes.job] Todos os SQLs concluídos — ${viagens.length} motoristas encontrados`,
    );

    return { viagens, romaneios, notas, peso, devolucoes, entregas };
  }

  /**
   * Função para registrar o início e o fim de cada consulta SQL, além de logar a quantidade de registros retornados.
   * @param nome Nome da função que está sendo executada
   * @param promessa Promessa que representa a execução do SQL
   * @returns Promessa que resolve com o resultado do SQL
   */
  private static _registrar = <T>(nome: string, promessa: Promise<T[]>): Promise<T[]> =>
    promessa.then((resultado) => {
      Logger.info(`[premiacoes.job] ${nome}`);
      return resultado;
    });

  /**
   * Função para montar o DTO unificado a partir dos resultados dos 6 SQLs, utilizando funções auxiliares para cada parte do processo.
   * @param cabecalho Mapa instanciado
   * @param viagens Resultado do SQL `totaisViagem`
   */
  private static _montarViagensPorMotorista(
    cabecalho: Map<number, PremiacoesDto>,
    viagens: TotaisViagemDto[],
  ) {
    for (const viagem of viagens) {
      cabecalho.set(viagem.handle, {
        handle_motorista: viagem.handle,
        nome: viagem.nome,
        total_viagens: viagem.total_viagens,
        finalizadas_total: viagem.finalizadas_total,
        finalizadas_ravex: viagem.finalizadas_ravex,
        ton_geral: 0,
        volume_geral: 0,
        total_notas_emitidas: 0,
        total_notas_premiacao: 0,
        qtd_entregas_realizadas: 0,
        ton_entregue_real: 0,
        total_notas_entregues: 0,
        ton_devolvida: 0,
        total_notas_devolvidas: 0,
      });
    }
  }

  /**
   * Função para inserir os dados dos romaneios no DTO unificado.
   * @param cabecalho Mapa já preenchido parcialmente
   * @param romaneios Resultado do SQL `totaisRomaneios`
   */
  private static _inserirRomaneios(
    cabecalho: Map<number, PremiacoesDto>,
    romaneios: TotaisRomaneiosDto[],
  ) {
    for (const romaneio of romaneios) {
      const motorista = cabecalho.get(romaneio.motorista);
      if (!motorista) continue;
      motorista.ton_geral = romaneio.peso_total / 1000;
      motorista.volume_geral = romaneio.volume_total;
    }
  }

  /**
   * Função para inserir os dados das notas fiscais emitidas no DTO unificado.
   * @param cabecalho Mapa já preenchido parcialmente
   * @param notas Resultado do SQL `resumoNotasFiscais`
   */
  private static _inserirNotasFiscais(
    cabecalho: Map<number, PremiacoesDto>,
    notas: ResumoNotasFiscaisDto[],
  ) {
    for (const nota of notas) {
      const motorista = cabecalho.get(nota.motorista);
      if (!motorista) continue;
      motorista.total_notas_emitidas = nota.total_notas;
    }
  }

  /**
   * Função para inserir os dados de peso e notas entregues no DTO unificado.
   * @param cabecalho Mapa já preenchido parcialmente
   * @param infos Resultado do SQL `resumoNotasPeso`
   */
  private static _inserirPeso(
    cabecalho: Map<number, PremiacoesDto>,
    infos: ResumoNotasPesoDto[],
  ) {
    for (const info of infos) {
      const motorista = cabecalho.get(info.motorista);
      if (!motorista) continue;
      motorista.ton_entregue_real = info.ton_entregue;
      motorista.total_notas_entregues = info.total_notas_entregues;
    }
  }

  /**
   * Função para inserir os dados de devoluções no DTO unificado.
   * @param cabecalho Mapa já preenchido parcialmente
   * @param devolucoes Resultado do SQL `resumoDevolucoes`
   */
  private static _inserirDevolucoes(
    cabecalho: Map<number, PremiacoesDto>,
    devolucoes: ResumoDevolucoesDto[],
  ) {
    for (const devolucao of devolucoes) {
      const motorista = cabecalho.get(devolucao.motorista);
      if (!motorista) continue;
      motorista.ton_devolvida = devolucao.peso_devolvido / 1000;
      motorista.total_notas_devolvidas = devolucao.total_notas_devolvidas;
    }
  }

  /**
   * Função para inserir os dados de entregas realizadas no DTO unificado.
   * @param cabecalho Mapa já preenchido parcialmente
   * @param entregas Resultado do SQL `totalEntregas`
   */
  private static _inserirEntregas(
    cabecalho: Map<number, PremiacoesDto>,
    entregas: TotalEntregasDto[],
  ) {
    for (const entrega of entregas) {
      const motorista = cabecalho.get(entrega.motorista);
      if (!motorista) continue;
      motorista.qtd_entregas_realizadas = entrega.total_paradas_sucesso;
    }
  }
}
