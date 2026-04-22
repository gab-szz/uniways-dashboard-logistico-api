export const totaisViagemSQL = `
WITH rl AS (
    -- Viagens que possuem log do usuário 82 com tipo 171 (Ravex)
    SELECT DISTINCT l.viagem
    FROM OP_VIAGEMLOG l
    INNER JOIN OP_VIAGEM vf
        ON vf.handle = l.viagem
       AND vf.emissao BETWEEN @dtini AND @dtfim
    WHERE l.logusuariocadastro = 82
      AND l.TIPOMENSAGEM = 171
),
ri AS (
    -- Viagens que possuem integração enviada com sucesso (canal 110)
    SELECT DISTINCT i.handleorigem AS viagem
    FROM in_integracao i
    INNER JOIN OP_VIAGEM vf
        ON vf.handle = i.handleorigem
       AND vf.emissao BETWEEN @dtini AND @dtfim
    WHERE i.canalintegracao = 110
      AND i.objeto = 1207
      AND i.TIPOEVENTOINTERNO = 22
      AND i.ERROINTEGRACAO IS NULL
)
SELECT
    mot.handle,
    mot.nome,
    COUNT(v.handle) AS total_viagens,
    SUM(CASE WHEN v.status IN (6, 8, 9, 12) THEN 1 ELSE 0 END) AS finalizadas_total,
    SUM(CASE
            WHEN v.status IN (6, 8, 9, 12)
             AND rl.viagem IS NOT NULL
             AND ri.viagem IS NOT NULL
            THEN 1 ELSE 0
        END) AS finalizadas_ravex
FROM OP_VIAGEM v
LEFT JOIN MS_PESSOA mot ON v.MOTORISTA = mot.handle
LEFT JOIN rl ON rl.viagem = v.handle
LEFT JOIN ri ON ri.viagem = v.handle
WHERE v.emissao BETWEEN @dtini AND @dtfim
GROUP BY mot.handle, mot.nome
`;
