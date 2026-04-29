import { IPremiacoesRepository, PeriodoDTO } from './premiacoes.repository.js';
import { conectarBanco } from '../../../config/db.js';
import {
  PremiacoesDTO,
  TotaisViagemDTO,
  TotaisRomaneiosDTO,
  ResumoNotasFiscaisDTO,
  ResumoNotasPesoDTO,
  ResumoDevolucoesDTO,
  TotalEntregasDTO,
} from '../dtos/premiacoes.dto.js';
import { totaisViagemSQL } from './SQL/1-totais-viagem.sql.js';
import { totaisRomaneiosSQL } from './SQL/2-totais-romaneios.sql.js';
import { resumoNotasFiscaisSQL } from './SQL/3-resumo-notas-fiscais.sql.js';
import { resumoNotasPesoSQL } from './SQL/4-resumo-notas-peso-ent.sql.js';
import { resumoDevolucoesSQL } from './SQL/5-resumo-devolucoes.sql.js';
import { totalEntregasSQL } from './SQL/6-total-entregas.sql.js';
import { premiacoesSQL } from './SQL/consultar-por-motorista.sql.js';

export class MssqlPremiacoesRepository implements IPremiacoesRepository {
  async totaisViagem(periodo: PeriodoDTO) {
    const db = await conectarBanco();
    const result = await db
      .request()
      .input('dtini', periodo.dtini)
      .input('dtfim', periodo.dtfim)
      .query<TotaisViagemDTO>(totaisViagemSQL);

    return result.recordset;
  }

  async totaisRomaneios(periodo: PeriodoDTO) {
    const db = await conectarBanco();
    const result = await db
      .request()
      .input('dtini', periodo.dtini)
      .input('dtfim', periodo.dtfim)
      .query<TotaisRomaneiosDTO>(totaisRomaneiosSQL);

    return result.recordset;
  }

  async resumoNotasFiscais(periodo: PeriodoDTO) {
    const db = await conectarBanco();
    const result = await db
      .request()
      .input('dtini', periodo.dtini)
      .input('dtfim', periodo.dtfim)
      .query<ResumoNotasFiscaisDTO>(resumoNotasFiscaisSQL);

    return result.recordset;
  }

  async resumoNotasPeso(periodo: PeriodoDTO) {
    const db = await conectarBanco();
    const result = await db
      .request()
      .input('dtini', periodo.dtini)
      .input('dtfim', periodo.dtfim)
      .query<ResumoNotasPesoDTO>(resumoNotasPesoSQL);

    return result.recordset;
  }

  async resumoDevolucoes(periodo: PeriodoDTO) {
    const db = await conectarBanco();
    const result = await db
      .request()
      .input('dtini', periodo.dtini)
      .input('dtfim', periodo.dtfim)
      .query<ResumoDevolucoesDTO>(resumoDevolucoesSQL);

    return result.recordset;
  }

  async totalEntregas(periodo: PeriodoDTO) {
    const db = await conectarBanco();
    const result = await db
      .request()
      .input('dtini', periodo.dtini)
      .input('dtfim', periodo.dtfim)
      .query<TotalEntregasDTO>(totalEntregasSQL);

    return result.recordset;
  }

  async consultarPorMotorista(
    periodo: PeriodoDTO,
    handle: number,
  ): Promise<PremiacoesDTO | null> {
    const db = await conectarBanco();
    const result = await db
      .request()
      .input('dtini', periodo.dtini)
      .input('dtfim', periodo.dtfim)
      .input('motorista', handle)
      .query<PremiacoesDTO>(premiacoesSQL);

    return result.recordset[0] ?? null;
  }
}
