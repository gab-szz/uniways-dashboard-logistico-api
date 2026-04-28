import { IPremiacoesRepository, PeriodoDTO } from './premiacoes.repository.js';
import { conectarBanco } from '../../../config/db.js';
import {
  TotaisViagemDto,
  TotaisRomaneiosDto,
  ResumoNotasFiscaisDto,
  ResumoNotasPesoDto,
  ResumoDevolucoesDto,
  TotalEntregasDto,
} from '../dtos/premiacoes.dto.js';
import { totaisViagemSQL } from './SQL/1-totais-viagem.sql.js';
import { totaisRomaneiosSQL } from './SQL/2-totais-romaneios.sql.js';
import { resumoNotasFiscaisSQL } from './SQL/3-resumo-notas-fiscais.sql.js';
import { resumoNotasPesoSQL } from './SQL/4-resumo-notas-peso-ent.sql.js';
import { resumoDevolucoesSQL } from './SQL/5-resumo-devolucoes.sql.js';
import { totalEntregasSQL } from './SQL/6-total-entregas.sql.js';

export class MssqlPremiacoesRepository implements IPremiacoesRepository {
  async totaisViagem(periodo: PeriodoDTO) {
    const db = await conectarBanco();
    const result = await db
      .request()
      .input('dtini', periodo.dtini)
      .input('dtfim', periodo.dtfim)
      .query<TotaisViagemDto>(totaisViagemSQL);

    return result.recordset;
  }

  async totaisRomaneios(periodo: PeriodoDTO) {
    const db = await conectarBanco();
    const result = await db
      .request()
      .input('dtini', periodo.dtini)
      .input('dtfim', periodo.dtfim)
      .query<TotaisRomaneiosDto>(totaisRomaneiosSQL);

    return result.recordset;
  }

  async resumoNotasFiscais(periodo: PeriodoDTO) {
    const db = await conectarBanco();
    const result = await db
      .request()
      .input('dtini', periodo.dtini)
      .input('dtfim', periodo.dtfim)
      .query<ResumoNotasFiscaisDto>(resumoNotasFiscaisSQL);

    return result.recordset;
  }

  async resumoNotasPeso(periodo: PeriodoDTO) {
    const db = await conectarBanco();
    const result = await db
      .request()
      .input('dtini', periodo.dtini)
      .input('dtfim', periodo.dtfim)
      .query<ResumoNotasPesoDto>(resumoNotasPesoSQL);

    return result.recordset;
  }

  async resumoDevolucoes(periodo: PeriodoDTO) {
    const db = await conectarBanco();
    const result = await db
      .request()
      .input('dtini', periodo.dtini)
      .input('dtfim', periodo.dtfim)
      .query<ResumoDevolucoesDto>(resumoDevolucoesSQL);

    return result.recordset;
  }

  async totalEntregas(periodo: PeriodoDTO) {
    const db = await conectarBanco();
    const result = await db
      .request()
      .input('dtini', periodo.dtini)
      .input('dtfim', periodo.dtfim)
      .query<TotalEntregasDto>(totalEntregasSQL);

    return result.recordset;
  }
}
