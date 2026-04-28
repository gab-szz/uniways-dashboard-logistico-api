import servidor from './app.js';
import { env } from './config/env.js';
import { atualizarCachePremiacoes } from './jobs/premiacoes/premiacoes.job.js';
import { iniciarAgendadorPremiacoes } from './jobs/premiacoes/premiacoes.scheduler.js';
import './jobs/premiacoes/premiacoes.worker.js';
import { Logger } from './logger/logger.js';

async function iniciar() {
  await servidor.listen({ port: env.PORTA });
  Logger.info(`[main] Servidor rodando na porta ${env.PORTA}`);

  Logger.info('[main] Iniciando aquecimento do cache de premiações...');
  try {
    await atualizarCachePremiacoes();
    Logger.info('[main] Aquecimento do cache concluído');
  } catch (erro) {
    Logger.error(
      `[main] Falha no aquecimento do cache: ${erro instanceof Error ? erro.message : String(erro)}`,
    );
  }

  Logger.info('[main] Registrando scheduler de premiações...');
  try {
    await iniciarAgendadorPremiacoes();
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
