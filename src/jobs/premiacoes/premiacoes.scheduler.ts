import { Queue } from 'bullmq';
import { criarConexaoBullMQ } from '../../config/redis.js';
import { NOME_FILA_PREMIACOES } from './premiacoes.job.js';

const INTERVALO_MS = 10 * 60 * 1000; // 10 minutos

/**
 * Inicializa o scheduler que agenda o job de premiações repetível.
 *
 * Usa `upsertJobScheduler` (BullMQ v5+), que é idempotente:
 * chamar novamente após um restart atualiza o agendamento em vez de duplicar.
 *
 * Deve ser chamado uma única vez no boot da aplicação, após o aquecimento inicial.
 */
export async function iniciarSchedulerPremiacoes(): Promise<void> {
  const fila = new Queue(NOME_FILA_PREMIACOES, {
    connection: criarConexaoBullMQ(),
  });

  await fila.upsertJobScheduler(
    'premiacoes-atualizar-cache', // ID único do scheduler (chave idempotente)
    { every: INTERVALO_MS },
    { name: 'atualizar-cache', data: {} },
  );

  console.log(
    `[premiacoes.scheduler] Job agendado a cada ${INTERVALO_MS / 60000} minutos`,
  );

  await fila.close();
}
