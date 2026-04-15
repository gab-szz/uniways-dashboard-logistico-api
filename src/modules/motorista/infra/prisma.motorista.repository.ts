import { prisma } from '../../../config/prisma.js';
import type {
  IMotoristaRepository,
  MotoristaDto,
} from '../domain/motorista.repository.js';

export class PrismaMotoristaRepository implements IMotoristaRepository {
  async listarTodos(): Promise<MotoristaDto[]> {
    return prisma.$queryRaw<MotoristaDto[]>`
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
    `;
  }
}
