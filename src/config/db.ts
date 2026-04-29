import mssql from 'mssql';
import { env } from './env.js';

const config: mssql.config = {
  server: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_DATABASE,
  options: {
    encrypt: false,
    trustServerCertificate: true,
    requestTimeout: 600000, // Timeout de 10 minutos (em milissegundos)
    connectTimeout: 30000,
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

export const pool = new mssql.ConnectionPool(config);

/**
 * Garante que o pool esteja conectado antes de retornar.
 * Se já estiver conectando, aguarda. Se não, conecta.
 */
export async function conectarBanco() {
  if (pool.connected) return pool;
  if (pool.connecting) {
    return new Promise<mssql.ConnectionPool>((resolve) => {
      pool.once('connect', () => resolve(pool));
    });
  }
  return await pool.connect();
}
