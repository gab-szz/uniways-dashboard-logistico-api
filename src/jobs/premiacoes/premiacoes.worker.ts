import { Worker } from 'bullmq';
import { criarConexaoBullMQ } from '../../config/redis.js';
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
  async () => {
    await atualizarCachePremiacoes();
  },
  {
    connection: criarConexaoBullMQ(),
    concurrency: 1, // apenas 1 job por vez para não sobrecarregar o banco
  },
);

workerPremiacoes.on('completed', (job) => {
  console.log(`[premiacoes.worker] Job ${job.id} concluído`);
});

workerPremiacoes.on('failed', (job, erro) => {
  console.error(`[premiacoes.worker] Job ${job?.id} falhou:`, erro.message);
});
