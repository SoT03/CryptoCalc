import Layout from '@/components/layout/layout';
import { IconArrowsLeftRight } from '@tabler/icons-react';

import classes from '../styles/converter/converter.module.scss';
import CurrencyRow from '@/components/assets/Select';
import { useState } from 'react';

const ConverterPage: React.FC<{
	data: [{ symbol: string; priceUSD: number }];
	currencyOptions: string[];
}> = (props) => {
	const [fromCurrency, setFromCurrency] = useState(props.currencyOptions[0]);
	const [toCurrency, setToCurrency] = useState(props.currencyOptions[1]);

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
							<CurrencyRow
								className={classes['calc__box-select']}
								currencyOptions={props.currencyOptions}
								selected={fromCurrency}
								onChangeCurrency={(e) => setFromCurrency(e.target.value)}
							/>
							<button className={classes['calc__box-btn']}>
								<IconArrowsLeftRight />
							</button>
							<CurrencyRow
								className={classes['calc__box-select']}
								currencyOptions={props.currencyOptions}
								selected={toCurrency}
								onChangeCurrency={(e) => setToCurrency(e.target.value)}
							/>
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

	const exchangeResponse = await fetch(
		'http://api.exchangeratesapi.io/v1/latest?access_key=c60fa9417eb80a12f50f60d8c369c08a',
		{
			method: 'GET',
		}
	);
	const cryptoArray: any[] = [];

	const exchangeData = await exchangeResponse.json();

	const fourCurrencies: string[] = ['USD', 'PLN', 'GBP', 'EUR'];

	fourCurrencies.map((item) => {
		const itemObj = {
			symbol: item,
			priceUSD: exchangeData.rates[item] * exchangeData.rates['USD'],
		};

		cryptoArray.push(itemObj);
	});

	//USD, PLN, GBP,EUR

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

	const currencySymbol = cryptoArray.map((item) => {
		return item.symbol;
	});

	return {
		props: { data: cryptoArray, currencyOptions: currencySymbol },
	};
};
