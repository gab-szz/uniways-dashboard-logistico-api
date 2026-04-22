export const totaisRomaneiosSQL = `
SELECT
	v.motorista,
	SUM(r.peso) AS peso_total,
	SUM(r.quantidadevolume) AS volume_total,
	SUM(r.valormercadoria) AS valor_total
FROM
	OP_VIAGEMROMANEIO r
LEFT JOIN OP_VIAGEM v on
	v.handle = r.viagem
WHERE
	r.status <> 6 AND
	v.emissao BETWEEN @dtini AND @dtfim 
group by v.motorista;
`;
