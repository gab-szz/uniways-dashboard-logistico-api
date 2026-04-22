export const resumoNotasFiscaisSQL = `
SELECT
	v.motorista,
	COUNT(DISTINCT 
            CAST(i.REMETENTE AS VARCHAR) + '|' + 
            CAST(i.SERIE AS VARCHAR) + '|' + 
            CAST(i.NUMERO AS VARCHAR)
        ) AS total_notas
FROM
	OP_VIAGEMROMANEIO r
INNER JOIN OP_VIAGEMROMANEIOITEM i ON i.viagemromaneio = r.handle
INNER JOIN OP_VIAGEM v ON v.handle = r.viagem
WHERE
	r.status <> 6 AND
	i.ehmdfe = 'N' AND
	i.EHDOCUMENTOTRANSPORTEEMITIDO = 'N' AND
	v.emissao BETWEEN @dtini AND @dtfim 
group by v.motorista
`;
