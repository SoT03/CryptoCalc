import { GetStaticProps } from 'next';

const DetailPage: React.FC<{ data: {}}> = (props) => {
	console.log(props.data);

	return <h1>H1</h1>;
};

export const getStaticPaths = async () => {
	const API_KEY = '4a3b5bb3-422d-41c7-8730-e219eff221e5';
	const response = await fetch(
		'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
		{
			method: 'GET',
			headers: {
				Accept: '*/*',
				'X-CMC_PRO_API_KEY': API_KEY,
			},
		}
	);

	const cryptoData = await response.json();

	const pathsArray = cryptoData.data.slice(0, 50);

	return {
		fallback: false,
		paths: pathsArray.map((crypto: { id: number }) => ({
			params: { cryptoId: crypto.id.toString() },
		})),
	};
};

export const getStaticProps = (async (context) => {
	const cryptoId = context.params?.cryptoId;

	const API_KEY = '4a3b5bb3-422d-41c7-8730-e219eff221e5';
	const response = await fetch(
		'https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=' + cryptoId,
		{
			method: 'GET',
			headers: {
				Accept: '*/*',
				'X-CMC_PRO_API_KEY': API_KEY,
			},
		}
	);
	const data = await response.json();

	const cryptoDetails = data.data;

	return {
		props: { data: cryptoDetails },
	};
}) satisfies GetStaticProps;

export default DetailPage;
