import { Queue } from 'bullmq';
import { INTERVALO_MS, NOME_FILA_PREMIACOES } from './consts.js';
import { criarConexaoBullMQ } from '../../config/redis.js';
import { Logger } from '../../logger/logger.js';

/**
 * Inicializa o scheduler que agenda o job de premiações repetível.
 *
 * Deve ser chamado uma única vez no boot da aplicação, após o aquecimento inicial.
 */
export async function iniciarAgendadorPremiacoes(): Promise<void> {
  const fila = new Queue(NOME_FILA_PREMIACOES, {
    connection: criarConexaoBullMQ(),
  });

  await fila.upsertJobScheduler(
    'premiacoes-atualizar-cache',
    { every: INTERVALO_MS },
    { name: 'atualizar-cache', data: {} },
  );

  Logger.info(
    `[premiacoes.scheduler] Job agendado a cada ${INTERVALO_MS / 60000} minutos`,
  );

  await fila.close();
}
