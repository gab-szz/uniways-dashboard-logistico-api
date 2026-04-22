import { Redis } from 'ioredis';
import { env } from './env.js';

/**
 * Cliente Redis singleton.
 * Usado para operações de cache (get/set/del).
 * Não use este cliente diretamente no BullMQ — utilize `opcoesConexaoRedis()`.
 */
export const clienteRedis = new Redis(env.REDIS_URL, {
  maxRetriesPerRequest: 3,
});

clienteRedis.on('error', (erro) => {
  console.error('[redis] Erro na conexão:', erro.message);
});

clienteRedis.on('connect', () => {
  console.log('[redis] Conectado ao Redis');
});

/**
 * Retorna as opções de conexão Redis compatíveis com BullMQ.
 * BullMQ exige `maxRetriesPerRequest: null` para não bloquear a fila.
 *
 * Criamos uma nova instância a cada chamada para que worker, scheduler
 * e queue tenham conexões independentes.
 */
export function criarConexaoBullMQ(): Redis {
  return new Redis(env.REDIS_URL, {
    maxRetriesPerRequest: null,
  });
}
