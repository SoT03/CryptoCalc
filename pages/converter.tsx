import Layout from '@/components/layout/layout';
import { IconArrowsLeftRight } from '@tabler/icons-react';

import classes from '../styles/converter/converter.module.scss';
import CurrencyRow from '@/components/assets/Select';

const ConverterPage: React.FC<{ data: [] }> = (props) => {
	const selectCurrencyHandler = () => {
		return;
	};

	const result: string = '';

	return (
		<Layout>
			<main className={classes.calculator}>
				<div className='wrapper'>
					<div className={classes.calc}>
						<input type='number' className={classes['calc__amount']} />
						<div className={classes['calc__box']}>
							<CurrencyRow className={classes['calc__box-select']} />
							<button className={classes['calc__box-btn']}>
								<IconArrowsLeftRight />
							</button>
							<CurrencyRow className={classes['calc__box-select']} />
						</div>
					</div>
					<p>{result}</p>
				</div>
			</main>
		</Layout>
	);
};

export default ConverterPage;

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

	const firstTen = cryptoData.data.slice(0, 10);

	const cryptoArray: any[] = [];

	firstTen.forEach(
		(item: {
			symbol: string;
			quote: {
				USD: {
					price: number;
					percent_change_24h: number;
					market_cap: number;
				};
			};
		}) => {
			const itemObj = {
				symbol: item.symbol,
				priceUSD: item.quote.USD.price,
			};

			cryptoArray.push(itemObj);
		}
	);

	return {
		props: { data: cryptoArray },
	};
};
