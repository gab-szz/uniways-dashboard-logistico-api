import servidor from './app.js';
import { env } from './config/env.js';
import { atualizarCachePremiacoes } from './jobs/premiacoes/premiacoes.job.js';
import { iniciarSchedulerPremiacoes } from './jobs/premiacoes/premiacoes.scheduler.js';

// Registra o worker (side-effect: inicia o processo de escuta da fila)
import './jobs/premiacoes/premiacoes.worker.js';

async function iniciar() {
  await servidor.listen({ port: env.PORTA });
  console.log(`Servidor rodando na porta ${env.PORTA}`);

  // Aquece o cache imediatamente ao subir (não espera o primeiro job do scheduler)
  await atualizarCachePremiacoes();

  // Registra o job repetível no Redis
  await iniciarSchedulerPremiacoes();
}

iniciar().catch((err) => {
  console.error(err);
  process.exit(1);
});
