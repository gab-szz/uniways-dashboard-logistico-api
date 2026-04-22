// SQL 1 - totais-viagem
export interface TotaisViagemDto {
  handle: number;
  nome: string;
  total_viagens: number;
  finalizadas_total: number;
  finalizadas_ravex: number;
}

// SQL 2 - totais-romaneios
export interface TotaisRomaneiosDto {
  motorista: number;
  peso_total: number;
  volume_total: number;
  valor_total: number;
}

// SQL 3 - resumo-notas-fiscais
export interface ResumoNotasFiscaisDto {
  motorista: number;
  total_notas: number;
}

// SQL 4 - resumo-notas-peso-ent
export interface ResumoNotasPesoDto {
  motorista: number;
  ton_entregue: number;
  total_notas_entregues: number;
}

// SQL 5 - resumo-devolucoes
export interface ResumoDevolucoesDto {
  motorista: number;
  peso_devolvido: number;
  total_notas_devolvidas: number;
}

// SQL 6 - total-entregas
export interface TotalEntregasDto {
  motorista: number;
  total_paradas_sucesso: number;
}

// DTO unificado final (Redis)
export interface PremiacoesDto {
  handle_motorista: number;
  nome: string;
  total_viagens: number;
  finalizadas_total: number;
  finalizadas_ravex: number;
  ton_geral: number;
  volume_geral: number;
  total_notas_emitidas: number;
  total_notas_premiacao: number;
  qtd_entregas_realizadas: number;
  ton_entregue_real: number;
  total_notas_entregues: number;
  ton_devolvida: number;
  total_notas_devolvidas: number;
}
