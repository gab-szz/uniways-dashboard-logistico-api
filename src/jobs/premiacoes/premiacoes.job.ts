import { MssqlPremiacoesRepository } from '../../modules/premiacoes/infra/mssql.premiacoes.repository.js';
import type {
  IPremiacoesRepository,
  periodo,
} from '../../modules/premiacoes/infra/premiacoes.repository.js';
import type { PremiacoesDto } from '../../modules/premiacoes/dtos/premiacoes.dto.js';
import { salvar } from '../../infra/cache/cache.js';
import { Logger } from '../../logger/logger.js';

/** Chave usada para armazenar/recuperar o cache de premiações no Redis */
export const CHAVE_PREMIACOES = 'premiacoes:cache';

/** Nome da fila BullMQ para o job de premiações */
export const NOME_FILA_PREMIACOES = 'premiacoes';

/**
 * Executa os 6 SQLs em paralelo e unifica os resultados em um array
 * de `PremiacoesDto`, agrupado por motorista.
 *
 * @param rep - Implementação do repositório de premiações
 * @param periodo - Período de consulta (`dtini` e `dtfim`)
 * @returns Array unificado de premiações por motorista
 */
export async function unificarPremiacoes(
  rep: IPremiacoesRepository,
  periodo: periodo,
): Promise<PremiacoesDto[]> {
  Logger.info(`[premiacoes.job] Executando 6 SQLs em paralelo...`);

  const registrar = <T>(nome: string, promessa: Promise<T[]>): Promise<T[]> =>
    promessa.then((r) => {
      Logger.info(`[premiacoes.job] ${nome}: ${r.length} registros`);
      return r;
    });

  const TIMEOUT_MS = 5 * 60_000; // 5 minutos (primeira execução pode ser lenta por cold start)
  const timeout = new Promise<never>((_, reject) =>
    setTimeout(
      () => reject(new Error('Timeout: SQLs ultrapassaram 2 minutos')),
      TIMEOUT_MS,
    ),
  );

  const [viagens, romaneios, notas, peso, devolucoes, entregas] =
    await Promise.race([
      Promise.all([
        registrar('totaisViagem', rep.totaisViagem(periodo)),
        registrar('totaisRomaneios', rep.totaisRomaneios(periodo)),
        registrar('resumoNotasFiscais', rep.resumoNotasFiscais(periodo)),
        registrar('resumoNotasPeso', rep.resumoNotasPeso(periodo)),
        registrar('resumoDevolucoes', rep.resumoDevolucoes(periodo)),
        registrar('totalEntregas', rep.totalEntregas(periodo)),
      ]),
      timeout,
    ]);

  Logger.info(
    `[premiacoes.job] Todos os SQLs concluídos — ${viagens.length} motoristas encontrados`,
  );

  // Mapa indexado pelo handle do motorista para montar o DTO unificado
  const mapa = new Map<number, PremiacoesDto>();

  // SQL 1 — base do DTO (handle, nome, viagens, finalizadas)
  for (const v of viagens) {
    mapa.set(v.handle, {
      handle_motorista: v.handle,
      nome: v.nome,
      total_viagens: v.total_viagens,
      finalizadas_total: v.finalizadas_total,
      finalizadas_ravex: v.finalizadas_ravex,
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

  // SQL 2 — tonelagem e volume dos romaneios
  for (const r of romaneios) {
    const motorista = mapa.get(r.motorista);
    if (!motorista) continue;
    motorista.ton_geral = r.peso_total / 1000;
    motorista.volume_geral = r.volume_total;
  }

  // SQL 3 — total de notas fiscais emitidas
  for (const n of notas) {
    const motorista = mapa.get(n.motorista);
    if (!motorista) continue;
    motorista.total_notas_emitidas = n.total_notas;
  }

  // SQL 4 — tonelagem e notas entregues
  for (const p of peso) {
    const motorista = mapa.get(p.motorista);
    if (!motorista) continue;
    motorista.ton_entregue_real = p.ton_entregue;
    motorista.total_notas_entregues = p.total_notas_entregues;
  }

  // SQL 5 — devoluções
  for (const d of devolucoes) {
    const motorista = mapa.get(d.motorista);
    if (!motorista) continue;
    motorista.ton_devolvida = d.peso_devolvido / 1000;
    motorista.total_notas_devolvidas = d.total_notas_devolvidas;
  }

  // SQL 6 — paradas com sucesso (entregas realizadas)
  for (const e of entregas) {
    const motorista = mapa.get(e.motorista);
    if (!motorista) continue;
    motorista.qtd_entregas_realizadas = e.total_paradas_sucesso;
  }

  // Calculado: premiação = entregues + devolvidas
  for (const motorista of mapa.values()) {
    motorista.total_notas_premiacao =
      motorista.total_notas_entregues + motorista.total_notas_devolvidas;
  }

  return Array.from(mapa.values());
}

/**
 * Consulta o banco com o período padrão (300 dias atrás → +10 dias),
 * unifica os dados e salva no Redis.
 *
 * Chamada no boot da aplicação e repetida a cada 10 minutos pelo worker.
 */
export async function atualizarCachePremiacoes(): Promise<void> {
  Logger.info('[premiacoes.job] Iniciando atualização do cache...');

  const rep = new MssqlPremiacoesRepository();

  const hoje = new Date();

  // Período: primeiro ao último dia do mês atual
  const dtini = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
  const dtfim = new Date(
    hoje.getFullYear(),
    hoje.getMonth() + 1,
    0,
    23,
    59,
    59,
  );

  Logger.info(
    `[premiacoes.job] Período: ${dtini.toLocaleDateString('pt-BR')} → ${dtfim.toLocaleDateString('pt-BR')}`,
  );

  const dados = await unificarPremiacoes(rep, { dtini, dtfim });

  await salvar(CHAVE_PREMIACOES, dados);

  Logger.info(`[premiacoes.job] Cache atualizado: ${dados.length} motoristas`);
}
