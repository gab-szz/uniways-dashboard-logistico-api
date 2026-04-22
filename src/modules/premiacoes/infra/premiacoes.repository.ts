import {
  TotaisViagemDto,
  TotaisRomaneiosDto,
  ResumoNotasFiscaisDto,
  ResumoNotasPesoDto,
  ResumoDevolucoesDto,
  TotalEntregasDto,
} from '../dtos/premiacoes.dto.js';

export type periodo = {
  dtini: Date;
  dtfim: Date;
};

export interface IPremiacoesRepository {
  totaisViagem(periodo: periodo): Promise<TotaisViagemDto[]>;
  totaisRomaneios(periodo: periodo): Promise<TotaisRomaneiosDto[]>;
  resumoNotasFiscais(periodo: periodo): Promise<ResumoNotasFiscaisDto[]>;
  resumoNotasPeso(periodo: periodo): Promise<ResumoNotasPesoDto[]>;
  resumoDevolucoes(periodo: periodo): Promise<ResumoDevolucoesDto[]>;
  totalEntregas(periodo: periodo): Promise<TotalEntregasDto[]>;
}
