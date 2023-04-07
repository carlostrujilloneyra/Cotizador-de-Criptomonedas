
// Va a ser algo asincrono (async, await)

export const getDataCripto = async () => {
	const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';

	const rpta = await fetch(url);
	const data = await rpta.json();
	const { Data } = data;

	return {
		Data
	}
}