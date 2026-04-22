export const motoristaSQL = `
SELECT
	P.HANDLE AS handle,
	P.NOME AS nome
FROM
	MS_PESSOA P
WHERE
	P.EHMOTORISTA = 'S'
	AND P.INATIVACAOPESSOA IS NULL
	AND EXISTS (
	SELECT
		1
	FROM
		IN_CAMPOCOMPLEMENTAR C
	WHERE
		C.HANDLEORIGEM = P.HANDLE
		AND C.CAMPO = 'ID Ravex')
	AND EXISTS (
	SELECT
		1
	FROM
		op_viagem v
	WHERE
		v.motorista = p.handle
		AND v.emissao BETWEEN @dtini AND @dtfim );
`;
