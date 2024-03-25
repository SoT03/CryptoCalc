import Layout from '@/components/layout/layout';
import classes from '../../styles/detailsPage/detailsPage.module.scss';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

type cryptoDescData = {
	id: number;
	name: string;
	symbol: string;
	description: string;
};

const DetailsPage: React.FC<{ data: cryptoDescData }> = (props) => {
	const router = useRouter();

	if (router.isFallback) {
		return <p>XD</p>;
	}

	return (
		<Layout>
			<main className={classes.box}>
				<div className='wrapper'>
					<div className={classes.body}>
						<div className={classes['body__left']}>
							<img
								src={`https://s2.coinmarketcap.com/static/img/coins/128x128/${props.data.id}.png`}
								alt={`${props.data.name} logo`}
								className={classes['body__left-logo']}
							/>
							<h2 className={classes['body__left-title']}>{props.data.name}</h2>
							<p className={classes['body__left-symbol']}>
								Symbol: {props.data.symbol}
							</p>
						</div>
						<div className={classes['body__right']}>
							<p className={classes['body__right-desc']}>
								{props.data.description}
							</p>
							<Link className={classes.back} href='/'>
								Home Page
							</Link>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	);
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
		fallback: true,
		paths: pathsArray.map((crypto: { id: number }) => ({
			params: { cryptoId: crypto.id.toString() },
		})),
	};
};

export const getStaticProps = (async (context) => {
	const cryptoId: any = context.params?.cryptoId;

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

	const cryptoDetails = data.data[cryptoId];

	return {
		props: { data: cryptoDetails },
	};
}) satisfies GetStaticProps;

export default DetailsPage;
