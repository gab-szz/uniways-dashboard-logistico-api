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
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

export const db = new mssql.ConnectionPool(config);

export const dbConnect = db.connect();
