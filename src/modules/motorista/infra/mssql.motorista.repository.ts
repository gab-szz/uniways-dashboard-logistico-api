import { conectarBanco } from '../../../config/db.js';
import type { IMotoristaRepository } from './motorista.repository.js';
import { MotoristaDTO } from '../dtos/motorista.dto.js';
import { motoristaSQL } from './SQL/motorista-sql.js';

export class MssqlMotoristaRepository implements IMotoristaRepository {
  async listarTodos(): Promise<MotoristaDTO[]> {
    const db = await conectarBanco();

    const { dtini, dtfim } = this._definirPrazoAtividade();

    const result = await db
      .request()
      .input('dtini', dtini)
      .input('dtfim', dtfim)
      .query<MotoristaDTO>(motoristaSQL);
    return result.recordset;
  }

  private _definirPrazoAtividade() {
    const hoje = new Date();
    const dtini = new Date(hoje);
    dtini.setDate(dtini.getDate() - 300);

    const dtfim = new Date(hoje);
    dtfim.setDate(dtfim.getDate() + 10);

    return { dtini, dtfim };
  }
}
