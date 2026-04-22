export const resumoDevolucoesSQL = `
SELECT
	v.motorista,
	SUM(i.peso) AS peso_devolvido,
	COUNT(DISTINCT CAST(i.REMETENTE AS VARCHAR) + '|' + CAST(i.SERIE AS VARCHAR) + '|' + CAST(i.NUMERO AS VARCHAR)) AS total_notas_devolvidas
FROM
	OP_VIAGEMROMANEIO r
INNER JOIN OP_VIAGEMROMANEIOITEM i ON i.viagemromaneio = r.handle
INNER JOIN OP_OCORRENCIA oo ON oo.ROMANEIOITEM = i.handle
INNER JOIN OP_VIAGEM v ON v.handle = r.viagem
WHERE
	r.status <> 6 AND
	i.ehmdfe = 'N' AND
	oo.tipo IN (81, 112) AND
	v.emissao BETWEEN @dtini AND @dtfim
group by v.motorista;
`;
