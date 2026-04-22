import servidor from './app.js';
import { env } from './config/env.js';
import { Logger } from './logger/logger.js';
import { atualizarCachePremiacoes } from './jobs/premiacoes/premiacoes.job.js';
import { iniciarSchedulerPremiacoes } from './jobs/premiacoes/premiacoes.scheduler.js';

// Registra o worker (side-effect: inicia o processo de escuta da fila)
import './jobs/premiacoes/premiacoes.worker.js';

async function iniciar() {
  await servidor.listen({ port: env.PORTA });
  Logger.info(`[main] Servidor rodando na porta ${env.PORTA}`);

  // Aquece o cache imediatamente ao subir (não espera o primeiro job do scheduler)
  Logger.info('[main] Iniciando aquecimento do cache de premiações...');
  try {
    await atualizarCachePremiacoes();
    Logger.info('[main] Aquecimento do cache concluído');
  } catch (erro) {
    Logger.error(
      `[main] Falha no aquecimento do cache: ${erro instanceof Error ? erro.message : String(erro)}`,
    );
  }

  // Registra o job repetível no Redis
  Logger.info('[main] Registrando scheduler de premiações...');
  try {
    await iniciarSchedulerPremiacoes();
  } catch (erro) {
    Logger.error(
      `[main] Falha ao registrar scheduler: ${erro instanceof Error ? erro.message : String(erro)}`,
    );
  }
}

iniciar().catch((err) => {
  Logger.error(`[main] Erro fatal ao iniciar servidor: ${err.message}`);
  process.exit(1);
});
