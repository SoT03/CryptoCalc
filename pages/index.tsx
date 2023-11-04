import Header from '@/components/header';
import Layout from '@/components/layout/layout';

const HomePage: React.FC = (props) => {
	return (
		<Layout>
			<Header />
		</Layout>
	);
};

export default HomePage;

export const getServerSideProps = async () => {
	const API_KEY = '4a3b5bb3-422d-41c7-8730-e219eff221e5';

	const response = await fetch(
		'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
		{
			method: 'GET',
			headers: {
				'X-CMC_PRO_API_KEY': API_KEY,
			},
		}
	);

	console.log(await response.json());

	return { props: {} };
};
