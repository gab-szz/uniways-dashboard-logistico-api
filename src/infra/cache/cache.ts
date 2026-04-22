import { clienteRedis } from '../../config/redis.js';

const TTL_PADRAO_SEGUNDOS = 3600; // 1 hora

/**
 * Salva um valor no Redis como JSON.
 *
 * @param chave - Chave de identificação no Redis
 * @param dados - Dados a serializar e armazenar
 * @param ttlSegundos - Tempo de expiração em segundos (padrão: 1 hora)
 */
export async function salvar<T>(
  chave: string,
  dados: T,
  ttlSegundos = TTL_PADRAO_SEGUNDOS,
): Promise<void> {
  await clienteRedis.set(chave, JSON.stringify(dados), 'EX', ttlSegundos);
}

/**
 * Recupera e deserializa um valor do Redis.
 *
 * @param chave - Chave de identificação no Redis
 * @returns Os dados deserializados ou `null` se a chave não existir
 */
export async function obter<T>(chave: string): Promise<T | null> {
  const valor = await clienteRedis.get(chave);
  if (!valor) return null;
  return JSON.parse(valor) as T;
}

/**
 * Remove uma chave do Redis.
 *
 * @param chave - Chave a ser removida
 */
export async function remover(chave: string): Promise<void> {
  await clienteRedis.del(chave);
}
