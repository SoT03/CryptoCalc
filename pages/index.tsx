import AboutUs from '@/components/aboutUs';
import Header from '@/components/header';
import Layout from '@/components/layout/layout';
import Market from '@/components/market';
import WhyUs from '@/components/whyUs';

const HomePage: React.FC<{ firstFourCurrencies: []; allCurrencies: [] }> = (
	props: any
) => {
	return (
		<Layout>
			<Header data={props.firstFourCurrencies} />
			<main>
				<Market data={props.allCurrencies} />
				<AboutUs />
				<WhyUs />
			</main>
		</Layout>
	);
};

export default HomePage;

export const getServerSideProps = async () => {
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

	const firstFour = cryptoData.data.slice(0, 4);
	const allCryptos = cryptoData.data.slice(0, 50);

	return {
		props: { firstFourCurrencies: firstFour, allCurrencies: allCryptos },
	};
};
