export const totalEntregasSQL = `
SELECT 
    -- Aqui está o segredo: contamos quantos CLIENTES ÚNICOS tiveram ocorrência de sucesso/dev na viagem
	v.motorista,
    COUNT(DISTINCT i.DESTINATARIO) AS total_paradas_sucesso 
FROM 
	OP_VIAGEMROMANEIO r
INNER JOIN OP_VIAGEMROMANEIOITEM i ON i.viagemromaneio = r.handle
INNER JOIN OP_OCORRENCIA oo ON oo.ROMANEIOITEM = i.handle
INNER JOIN OP_VIAGEM v ON v.handle = r.viagem
WHERE 
	r.status <> 6 AND
	i.ehmdfe = 'N' AND
	oo.tipo IN (72, 73, 81, 112)  AND
	v.emissao BETWEEN @dtini AND @dtfim 
group by v.motorista;
`;
