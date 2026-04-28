export const NOME_FILA_PREMIACOES = 'premiacoes';
export const INTERVALO_MS = 10 * 60 * 1000; // 10 minutos

/**
 * Gera a chave de cache com escopo de período.
 * Exemplo: `premiacoes:cache:2026-04-01:2026-04-30`
 */
export function chaveCachePremiacoes(dtini: string, dtfim: string): string {
  return `premiacoes:cache:${dtini}:${dtfim}`;
}

/** Formata uma Date para YYYY-MM-DD (sem converter fuso horário). */
export function formatarData(data: Date): string {
  const ano = data.getFullYear();
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const dia = String(data.getDate()).padStart(2, '0');
  return `${ano}-${mes}-${dia}`;
}
