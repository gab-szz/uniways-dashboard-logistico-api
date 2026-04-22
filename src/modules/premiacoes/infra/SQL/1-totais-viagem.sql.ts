export const totaisViagemSQL = `
SELECT 
    mot.handle,
    mot.nome,
    COUNT(v.handle) AS total_viagens,
    SUM(CASE WHEN v.status IN (6, 8, 9, 12) THEN 1 ELSE 0 END) AS finalizadas_total,
    SUM(CASE 
            WHEN v.status IN (6, 8, 9, 12) 
             AND rv.tem_log = 1 
             AND rv.tem_int = 1 
            THEN 1 ELSE 0 
        END) AS finalizadas_ravex
FROM OP_VIAGEM v
LEFT JOIN MS_PESSOA mot ON v.MOTORISTA = mot.handle
CROSS APPLY (
    -- Aqui calculamos os flags para cada linha individual da viagem
    SELECT 
        (SELECT TOP 1 1 FROM OP_VIAGEMLOG l 
         WHERE l.viagem = v.handle AND l.logusuariocadastro = 82 AND l.TIPOMENSAGEM = 171) AS tem_log,
        
        (SELECT TOP 1 1 FROM in_integracao i 
         WHERE i.handleorigem = v.handle AND i.canalintegracao = 110 
           AND i.objeto = 1207 AND i.TIPOEVENTOINTERNO = 22 AND i.ERROINTEGRACAO IS NULL) AS tem_int
) AS rv
WHERE 
  v.emissao BETWEEN @dtini AND @dtfim
GROUP BY mot.handle, mot.nome
`;
