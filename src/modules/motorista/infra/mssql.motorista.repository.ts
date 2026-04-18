import { Service } from 'fastify-decorators';
import { db, dbConnect } from '../../../config/db.js';
import type {
  IMotoristaRepository,
  MotoristaDto,
} from '../domain/motorista.repository.js';

@Service()
export class MssqlMotoristaRepository implements IMotoristaRepository {
  async listarTodos(): Promise<MotoristaDto[]> {
    await dbConnect;
    const result = await db.request().query<MotoristaDto>(`
      SELECT
        P.HANDLE AS handle,
        P.NOME   AS nome
      FROM MS_PESSOA P
      WHERE
        P.EHMOTORISTA    = 'S'
        AND P.INATIVACAOPESSOA IS NULL
        AND EXISTS (
          SELECT 1
          FROM IN_CAMPOCOMPLEMENTAR C
          WHERE C.HANDLEORIGEM = P.HANDLE
            AND C.CAMPO = 'ID Ravex'
        )
    `);
    return result.recordset;
  }
}
