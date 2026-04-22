import { Worker } from 'bullmq';
import { criarConexaoBullMQ } from '../../config/redis.js';
import { Logger } from '../../logger/logger.js';
import {
  atualizarCachePremiacoes,
  NOME_FILA_PREMIACOES,
} from './premiacoes.job.js';

/**
 * Worker BullMQ responsável por processar os jobs da fila de premiações.
 * Ativado automaticamente ao importar este módulo (side-effect import no main.ts).
 *
 * Para pausar o worker: `worker.pause()`
 * Para encerrar: `worker.close()`
 */
export const workerPremiacoes = new Worker(
  NOME_FILA_PREMIACOES,
  async (job) => {
    Logger.info(`[premiacoes.worker] Iniciando processamento do job ${job.id}`);
    await atualizarCachePremiacoes();
  },
  {
    connection: criarConexaoBullMQ(),
    concurrency: 1, // apenas 1 job por vez para não sobrecarregar o banco
  },
);

Logger.info('[premiacoes.worker] Worker registrado e aguardando jobs na fila');

workerPremiacoes.on('completed', (job) => {
  Logger.info(`[premiacoes.worker] Job ${job.id} concluído com sucesso`);
});

workerPremiacoes.on('failed', (job, erro) => {
  Logger.error(`[premiacoes.worker] Job ${job?.id} falhou: ${erro.message}`);
});

workerPremiacoes.on('error', (erro) => {
  Logger.error(`[premiacoes.worker] Erro no worker: ${erro.message}`);
});
