import Layout from '@/components/layout/layout';
import { IconArrowsLeftRight } from '@tabler/icons-react';

import classes from '../styles/converter/converter.module.scss';

const ConverterPage: React.FC<{ exchange: {} }> = (props) => {
	console.log(props.exchange);

	const selectCurrencyHandler = () => {
		return;
	};

	const result: string = '';

	const currenciesList = (
		<select
			id='currency-one'
			name='selectedCurrency'
			className={classes['calc__box-select']}
			onChange={selectCurrencyHandler}>
			<option value='PLN'>PLN</option>
			<option value='USD'>USD</option>
			<option value='GBP'>GBP</option>
			<option value='EUR'>EUR</option>
			<option value='Crypto Currencies' disabled>
				Crypto Currencies
			</option>
			<option value='BTC'>BTC</option>
			<option value='BTC'>BTC</option>
			<option value='BTC'>BTC</option>
			<option value='BTC'>BTC</option>
			<option value='BTC'>BTC</option>
			<option value='BTC'>BTC</option>
		</select>
	);

	return (
		<Layout>
			<main className={classes.calculator}>
				<div className='wrapper'>
					<div className={classes.calc}>
						<input type='number' className={classes['calc__amount']} />
						<div className={classes['calc__box']}>
							{currenciesList}
							<button className={classes['calc__box-btn']}>
								<IconArrowsLeftRight />
							</button>

							<div>{currenciesList}</div>
						</div>
					</div>
					<p>{result}</p>
				</div>
			</main>
		</Layout>
	);
};

export default ConverterPage;

// export const getServerSideProps = async () => {
// 	const API_KEY = '4a3b5bb3-422d-41c7-8730-e219eff221e5';

// 	const response = await fetch(
// 		'https://pro-api.coinmarketcap.com/v1/exchange/assets?id=1027',
// 		{
// 			method: 'GET',
// 			headers: {
// 				Accept: '*/*',
// 				'X-CMC_PRO_API_KEY': API_KEY,
// 			},
// 		}
// 	);

// 	const cryptoExchangeData = await response.json();

// 	return {
// 		props: { exchange: cryptoExchangeData },
// 	};
// };
