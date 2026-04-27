import {
  TotaisViagemDto,
  TotaisRomaneiosDto,
  ResumoNotasFiscaisDto,
  ResumoNotasPesoDto,
  ResumoDevolucoesDto,
  TotalEntregasDto,
} from '../dtos/premiacoes.dto.js';

export type PeriodoDTO = {
  dtini: Date;
  dtfim: Date;
};

export interface IPremiacoesRepository {
  totaisViagem(periodo: PeriodoDTO): Promise<TotaisViagemDto[]>;
  totaisRomaneios(periodo: PeriodoDTO): Promise<TotaisRomaneiosDto[]>;
  resumoNotasFiscais(periodo: PeriodoDTO): Promise<ResumoNotasFiscaisDto[]>;
  resumoNotasPeso(periodo: PeriodoDTO): Promise<ResumoNotasPesoDto[]>;
  resumoDevolucoes(periodo: PeriodoDTO): Promise<ResumoDevolucoesDto[]>;
  totalEntregas(periodo: PeriodoDTO): Promise<TotalEntregasDto[]>;
}
