import { Redis } from 'ioredis';
import { env } from './env.js';
import { Logger } from '../logger/logger.js';

/**
 * Cliente Redis singleton.
 * Usado para operações de cache (get/set/del).
 * Não use este cliente diretamente no BullMQ — utilize `criarConexaoBullMQ()`.
 */
export const clienteRedis = new Redis(env.REDIS_URL, {
  maxRetriesPerRequest: 3,
});

clienteRedis.on('error', (erro) => {
  Logger.error(
    `[redis] Erro na conexão: ${erro.stack ?? erro.message ?? String(erro)}`,
  );
});

clienteRedis.on('connect', () => {
  Logger.info('[redis] Conectado ao Redis com sucesso');
});

/**
 * Retorna uma nova instância Redis compatível com BullMQ.
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
