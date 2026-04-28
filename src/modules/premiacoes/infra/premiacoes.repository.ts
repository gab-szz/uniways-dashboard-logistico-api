import {
  ResumoDevolucoesDTO,
  ResumoNotasFiscaisDTO,
  ResumoNotasPesoDTO,
  TotaisRomaneiosDTO,
  TotaisViagemDTO,
  TotalEntregasDTO,
} from '../dtos/premiacoes.dto.js';

export type PeriodoDTO = {
  dtini: Date;
  dtfim: Date;
};

export interface IPremiacoesRepository {
  totaisViagem(periodo: PeriodoDTO): Promise<TotaisViagemDTO[]>;
  totaisRomaneios(periodo: PeriodoDTO): Promise<TotaisRomaneiosDTO[]>;
  resumoNotasFiscais(periodo: PeriodoDTO): Promise<ResumoNotasFiscaisDTO[]>;
  resumoNotasPeso(periodo: PeriodoDTO): Promise<ResumoNotasPesoDTO[]>;
  resumoDevolucoes(periodo: PeriodoDTO): Promise<ResumoDevolucoesDTO[]>;
  totalEntregas(periodo: PeriodoDTO): Promise<TotalEntregasDTO[]>;
}
