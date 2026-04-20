/* eslint-disable @typescript-eslint/no-unused-vars */
import { Service } from 'fastify-decorators';
import { IPremiacoesRepository, periodo } from './premiacoes.repository.js';
import { conectarBanco } from '../../../config/db.js';
import { PremiacoesDto } from '../dtos/premiacoes.dto.js';

@Service()
export class MssqlPremiacoesRepository implements IPremiacoesRepository {
  async visaoGeral(periodo: periodo) {}

  async consultarTodas(periodo: periodo) {
    const db = await conectarBanco();
    const result = await db
      .request()
      .input('dtini', periodo.dtini)
      .input('dtfim', periodo.dtfim).query<PremiacoesDto[]>(`
      SELECT
	v.motorista as handle_motorista,
	mot.nome,
	COUNT(v.handle) AS total_viagens,
    
    -- Contadores de Status
    SUM(CASE WHEN v.status IN (6, 8, 9, 12) THEN 1 ELSE 0 END) AS finalizadas_total,
    SUM(CASE WHEN v.status IN (6, 8, 9, 12) AND ravex_log.existe = 1 AND ravex_int.existe = 1 THEN 1 ELSE 0 END) AS finalizadas_ravex,
    
    -- Totais de Emissão (Saída do CD)
    ISNULL(SUM(resumo_romaneio.peso_total / 1000.0), 0) AS ton_geral,
    ISNULL(SUM(resumo_romaneio.volume_total), 0) AS volume_geral,
    ISNULL(SUM(resumo_itens.total_notas), 0) AS total_notas_emitidas,
    
    -- COLUNA DE PREMIAÇÃO (Soma Entregues + Devolvidos)
    -- O motorista ganha pelo que processou com sucesso ou recusa justificada
    (ISNULL(SUM(resumo_entregas.total_notas_entregues), 0) + 
     ISNULL(SUM(resumo_devolucoes.total_notas_devolvidas), 0)) AS total_notas_premiacao,
     
    -- INDICADOR DE ENTREGAS (Pontos/Clientes Atendidos)
    -- Se o cliente teve 5 notas e 1 foi entregue, aqui contará apenas 1
    ISNULL(SUM(resumo_pontos_atendidos.total_paradas_sucesso), 0) AS qtd_entregas_realizadas,
    
    -- Totais de Entrega Efetiva (Status 72, 73)
    ISNULL(SUM(resumo_entregas.peso_entregue / 1000.0), 0) AS ton_entregue_real,
    ISNULL(SUM(resumo_entregas.total_notas_entregues), 0) AS total_notas_entregues,

    -- Totais de Devolução (Status 81, 112)
    ISNULL(SUM(resumo_devolucoes.peso_devolvido / 1000.0), 0) AS ton_devolvida,
    ISNULL(SUM(resumo_devolucoes.total_notas_devolvidas), 0) AS total_notas_devolvidas

   
FROM
    op_viagem v
left join ms_pessoa as mot on v.MOTORISTA = mot.handle

-- PRIMEIRO APPLY: Cuida apenas dos totais do Romaneio
OUTER APPLY (
    SELECT 
        SUM(r.peso) AS peso_total,
        SUM(r.quantidadevolume) AS volume_total,
        SUM(r.valormercadoria) AS valor_total
    FROM OP_VIAGEMROMANEIO r
    WHERE r.viagem = v.handle
      AND r.status <> 6 
) AS resumo_romaneio

-- SEGUNDO APPLY: Contagem de Notas Únicas por Remetente + Série + Número
OUTER APPLY (
    SELECT 
        COUNT(DISTINCT 
            CAST(i.REMETENTE AS VARCHAR) + '|' + 
            CAST(i.SERIE AS VARCHAR) + '|' + 
            CAST(i.NUMERO AS VARCHAR)
        ) AS total_notas
    FROM OP_VIAGEMROMANEIO r
    INNER JOIN OP_VIAGEMROMANEIOITEM i ON i.viagemromaneio = r.handle
    WHERE r.viagem = v.handle
      AND r.status <> 6 -- Ignora romaneios cancelados
      AND i.ehmdfe = 'N' 
      AND i.EHDOCUMENTOTRANSPORTEEMITIDO = 'N'
) AS resumo_itens

-- APPLY 3: Apenas Entregas (72, 73)
OUTER APPLY (
    SELECT 
    	SUM(i.peso) AS peso_entregue,
        COUNT(DISTINCT CAST(i.REMETENTE AS VARCHAR) + '|' + CAST(i.SERIE AS VARCHAR) + '|' + CAST(i.NUMERO AS VARCHAR)) AS total_notas_entregues
    FROM OP_VIAGEMROMANEIO r
    INNER JOIN OP_VIAGEMROMANEIOITEM i ON i.viagemromaneio = r.handle
    INNER JOIN OP_OCORRENCIA oo ON oo.ROMANEIOITEM = i.handle
    WHERE r.viagem = v.handle AND r.status <> 6 AND i.ehmdfe = 'N'
      AND oo.tipo IN (72, 73)
) AS resumo_entregas

-- APPLY 4: Apenas Devoluções (81, 112)
OUTER APPLY (
    SELECT 
    	SUM(i.peso) AS peso_devolvido,
        COUNT(DISTINCT CAST(i.REMETENTE AS VARCHAR) + '|' + CAST(i.SERIE AS VARCHAR) + '|' + CAST(i.NUMERO AS VARCHAR)) AS total_notas_devolvidas
    FROM OP_VIAGEMROMANEIO r
    INNER JOIN OP_VIAGEMROMANEIOITEM i ON i.viagemromaneio = r.handle
    INNER JOIN OP_OCORRENCIA oo ON oo.ROMANEIOITEM = i.handle
    WHERE r.viagem = v.handle AND r.status <> 6 AND i.ehmdfe = 'N'
      AND oo.tipo IN (81, 112)
) AS resumo_devolucoes

-- NOVO APPLY 5: Contagem de Pontos (Clientes) atendidos com sucesso ou devolução
OUTER APPLY (
    SELECT 
        -- Aqui está o segredo: contamos quantos CLIENTES ÚNICOS tiveram ocorrência de sucesso/dev na viagem
        COUNT(DISTINCT i.REMETENTE) AS total_paradas_sucesso 
    FROM OP_VIAGEMROMANEIO r
    INNER JOIN OP_VIAGEMROMANEIOITEM i ON i.viagemromaneio = r.handle
    INNER JOIN OP_OCORRENCIA oo ON oo.ROMANEIOITEM = i.handle
    WHERE r.viagem = v.handle
      AND r.status <> 6
      AND i.ehmdfe = 'N'
      -- Se houver pelo menos UMA ocorrência dessas para o cliente, o DISTINCT i.REMETENTE contará 1
      AND oo.tipo IN (72, 73, 81, 112) 
) AS resumo_pontos_atendidos

OUTER APPLY (
    SELECT TOP 1 1 AS existe
    FROM OP_VIAGEMLOG l
    WHERE l.viagem = v.handle 
      AND l.logusuariocadastro = 82 
      AND l.TIPOMENSAGEM IN (171)
) AS ravex_log

OUTER APPLY (
    SELECT TOP 1 1 AS existe
    FROM in_integracao i
    WHERE i.handleorigem = v.handle 
      AND i.canalintegracao = 110 
      AND i.objeto = 1207 
      AND i.TIPOEVENTOINTERNO = 22
      AND i.ERROINTEGRACAO IS NULL
) AS ravex_int

WHERE
    --v.motorista = 1415 AND
    v.emissao BETWEEN @dtini AND @dtfim
group by v.motorista, mot.nome;
      `);

    return result.recordset;
  }

  async consultarPorMotorista(motorista: number, periodo: periodo) {
    const db = await conectarBanco();
    const result = await db.request().query<PremiacoesDto>(``);

    return result.recordset;
  }
}
