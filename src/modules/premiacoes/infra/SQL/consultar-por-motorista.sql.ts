export const premiacoesSQL = `
WITH rr AS (
    SELECT
        r.viagem,
        SUM(r.peso) AS peso_total,
        SUM(r.quantidadevolume) AS volume_total,
        SUM(r.valormercadoria) AS valor_total
    FROM op_viagemromaneio r
    INNER JOIN op_viagem vf
        ON vf.handle = r.viagem
       AND vf.emissao >= @dtini
       AND vf.emissao < @dtfim
    WHERE r.status <> 6
    GROUP BY r.viagem
),
rit AS (
    SELECT
        x.viagem,
        COUNT(*) AS total_notas
    FROM (
        SELECT DISTINCT
            r.viagem,
            CAST(i.remetente AS VARCHAR(50)) + '|' +
            CAST(i.serie AS VARCHAR(50)) + '|' +
            CAST(i.numero AS VARCHAR(50)) AS chave_nota
        FROM op_viagemromaneio r
        INNER JOIN op_viagem vf
            ON vf.handle = r.viagem
           AND vf.emissao >= @dtini
           AND vf.emissao < @dtfim
        INNER JOIN op_viagemromaneioitem i
            ON i.viagemromaneio = r.handle
        WHERE r.status <> 6
          AND i.ehmdfe = 'N'
          AND i.ehdocumentotransporteemitido = 'N'
    ) x
    GROUP BY x.viagem
),
re AS (
    SELECT
        r.viagem,
        SUM(i.peso) AS peso_entregue,
        COUNT(DISTINCT
            CAST(i.remetente AS VARCHAR(50)) + '|' +
            CAST(i.serie AS VARCHAR(50)) + '|' +
            CAST(i.numero AS VARCHAR(50))
        ) AS total_notas_entregues
    FROM op_viagemromaneio r
    INNER JOIN op_viagem vf
        ON vf.handle = r.viagem
       AND vf.emissao >= @dtini
       AND vf.emissao < @dtfim
    INNER JOIN op_viagemromaneioitem i
        ON i.viagemromaneio = r.handle
    WHERE r.status <> 6
      AND i.ehmdfe = 'N'
      AND EXISTS (
          SELECT 1
          FROM op_ocorrencia oo
          WHERE oo.romaneioitem = i.handle
            AND oo.tipo IN (72, 73)
      )
    GROUP BY r.viagem
),
rd AS (
    SELECT
        r.viagem,
        SUM(i.peso) AS peso_devolvido,
        COUNT(DISTINCT
            CAST(i.remetente AS VARCHAR(50)) + '|' +
            CAST(i.serie AS VARCHAR(50)) + '|' +
            CAST(i.numero AS VARCHAR(50))
        ) AS total_notas_devolvidas
    FROM op_viagemromaneio r
    INNER JOIN op_viagem vf
        ON vf.handle = r.viagem
       AND vf.emissao >= @dtini
       AND vf.emissao < @dtfim
    INNER JOIN op_viagemromaneioitem i
        ON i.viagemromaneio = r.handle
    WHERE r.status <> 6
      AND i.ehmdfe = 'N'
      AND EXISTS (
          SELECT 1
          FROM op_ocorrencia oo
          WHERE oo.romaneioitem = i.handle
            AND oo.tipo IN (81, 112)
      )
    GROUP BY r.viagem
),
rpa AS (
    SELECT
        r.viagem,
        COUNT(DISTINCT i.remetente) AS total_paradas_sucesso
    FROM op_viagemromaneio r
    INNER JOIN op_viagem vf
        ON vf.handle = r.viagem
       AND vf.emissao >= @dtini
       AND vf.emissao < @dtfim
    INNER JOIN op_viagemromaneioitem i
        ON i.viagemromaneio = r.handle
    WHERE r.status <> 6
      AND i.ehmdfe = 'N'
      AND EXISTS (
          SELECT 1
          FROM op_ocorrencia oo
          WHERE oo.romaneioitem = i.handle
            AND oo.tipo IN (72, 73, 81, 112)
      )
    GROUP BY r.viagem
),
rl AS (
    SELECT DISTINCT
        l.viagem,
        1 AS existe
    FROM op_viagemlog l
    INNER JOIN op_viagem vf
        ON vf.handle = l.viagem
       AND vf.emissao >= @dtini
       AND vf.emissao < @dtfim
    WHERE l.logusuariocadastro = 82
      AND l.tipomensagem = 171
),
ri AS (
    SELECT DISTINCT
        i.handleorigem AS viagem,
        1 AS existe
    FROM in_integracao i
    INNER JOIN op_viagem vf
        ON vf.handle = i.handleorigem
       AND vf.emissao >= @dtini
       AND vf.emissao < @dtfim
    WHERE i.canalintegracao = 110
      AND i.objeto = 1207
      AND i.tipoeventointerno = 22
      AND i.errointegracao IS NULL
)
SELECT
    v.motorista AS handle_motorista,
    mot.nome,
    COUNT(v.handle) AS total_viagens,

    SUM(CASE
            WHEN v.status IN (6, 8, 9, 12) THEN 1
            ELSE 0
        END) AS finalizadas_total,

    SUM(CASE
            WHEN v.status IN (6, 8, 9, 12)
             AND ISNULL(rl.existe, 0) = 1
             AND ISNULL(ri.existe, 0) = 1
            THEN 1
            ELSE 0
        END) AS finalizadas_ravex,

    ISNULL(SUM(rr.peso_total / 1000.0), 0) AS ton_geral,
    ISNULL(SUM(rr.volume_total), 0) AS volume_geral,
    ISNULL(SUM(rit.total_notas), 0) AS total_notas_emitidas,

    ISNULL(SUM(re.total_notas_entregues), 0) +
    ISNULL(SUM(rd.total_notas_devolvidas), 0) AS total_notas_premiacao,

    ISNULL(SUM(rpa.total_paradas_sucesso), 0) AS qtd_entregas_realizadas,

    ISNULL(SUM(re.peso_entregue / 1000.0), 0) AS ton_entregue_real,
    ISNULL(SUM(re.total_notas_entregues), 0) AS total_notas_entregues,

    ISNULL(SUM(rd.peso_devolvido / 1000.0), 0) AS ton_devolvida,
    ISNULL(SUM(rd.total_notas_devolvidas), 0) AS total_notas_devolvidas
FROM op_viagem v
LEFT JOIN ms_pessoa mot
    ON mot.handle = v.motorista
LEFT JOIN rr
    ON rr.viagem = v.handle
LEFT JOIN rit
    ON rit.viagem = v.handle
LEFT JOIN re
    ON re.viagem = v.handle
LEFT JOIN rd
    ON rd.viagem = v.handle
LEFT JOIN rpa
    ON rpa.viagem = v.handle
LEFT JOIN rl
    ON rl.viagem = v.handle
LEFT JOIN ri
    ON ri.viagem = v.handle
WHERE v.emissao >= @dtini
  AND v.emissao < @dtfim
  AND v.motorista = @motorista
GROUP BY
    v.motorista,
    mot.nome
ORDER BY
    mot.nome;
`;
