import { Worker } from 'bullmq';
import { NOME_FILA_PREMIACOES } from './consts.js';
import { atualizarCachePremiacoes } from './premiacoes.job.js';
import { Logger } from '../../logger/logger.js';
import { criarConexaoBullMQ } from '../../config/redis.js';

export const workerPremiacoes = new Worker(
  NOME_FILA_PREMIACOES,
  async (job) => {
    Logger.info(`[premiacoes.worker] Iniciando processamento do job ${job.id}`);
    await atualizarCachePremiacoes();
  },
  {
    connection: criarConexaoBullMQ(),
    concurrency: 1,
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
