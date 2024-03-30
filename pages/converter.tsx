import Layout from '@/components/layout/layout';
import { IconArrowsLeftRight } from '@tabler/icons-react';

import classes from '../styles/converter/converter.module.scss';
import CurrencyRow from '@/components/assets/Select';
import { useEffect, useState } from 'react';
import Head from 'next/head';

const ConverterPage: React.FC<{
	data: [{ symbol: string; priceUSD: number }];
	currencyOptions: string[];
}> = (props) => {
	const [fromCurrency, setFromCurrency] = useState(props.currencyOptions[0]);
	const [toCurrency, setToCurrency] = useState(props.currencyOptions[1]);
	const [result, setResult] = useState(0);
	const [amount, setAmount] = useState(0);

	const convertFunction = () => {
		const fromCurrencyPrice: number = props.data.find(
			(item) => item.symbol === fromCurrency
		)!.priceUSD;

		const toCurrencyPrice = props.data.find(
			(item) => item.symbol === toCurrency
		)!.priceUSD;

		const convertedResult = (fromCurrencyPrice * amount) / toCurrencyPrice;

		setResult(convertedResult);
	};

	const amountHandler = (e: any) => {
		setAmount(e.target.value);
	};

	const reverseButtonHandler = () => {
		setToCurrency(fromCurrency);
		setFromCurrency(toCurrency);
	};

	useEffect(() => {
		convertFunction();
	}, [toCurrency, fromCurrency, amount]);

	return (
		<Layout>
			<Head>
				<meta
					name='description'
					content='Convert cryptocurrencies quickly and accurately with our easy-to-use crypto currency converter. Instantly calculate conversions between Bitcoin, Ethereum, Litecoin, and other digital assets.'
				/>
			</Head>
			<main className={classes.calculator}>
				<div className='wrapper'>
					<div className={classes.calc}>
						<input
							type='number'
							className={classes['calc__amount']}
							onChange={amountHandler}
							value={amount}
						/>
						<div className={classes['calc__box']}>
							<CurrencyRow
								className={classes['calc__box-select']}
								currencyOptions={props.currencyOptions}
								selected={fromCurrency}
								onChangeCurrency={(e) => setFromCurrency(e.target.value)}
							/>
							<button
								className={classes['calc__box-btn']}
								onClick={reverseButtonHandler}>
								<IconArrowsLeftRight />
							</button>
							<CurrencyRow
								className={classes['calc__box-select']}
								currencyOptions={props.currencyOptions}
								selected={toCurrency}
								onChangeCurrency={(e) => setToCurrency(e.target.value)}
							/>
						</div>

						<p
							className={
								classes[`${result ? 'calc__result--show' : 'calc__result'}`]
							}>
							{`${amount} ${fromCurrency} is equal to ${result.toFixed(
								4
							)} ${toCurrency} `}
						</p>
					</div>
				</div>
			</main>
		</Layout>
	);
};

export default ConverterPage;

export const getStaticProps = async () => {
	const API_KEY = '4a3b5bb3-422d-41c7-8730-e219eff221e5';
	const cryptoArray: any[] = [];

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
	const fourCurrencies: string[] = ['USD', 'PLN', 'GBP', 'EUR'];

	let currencySymbol = cryptoArray.map((item) => {
		return item.symbol;
	});

	const fullSymbolArray = currencySymbol.concat(fourCurrencies);

	const exchangeResponse = await fetch(
		'http://api.exchangeratesapi.io/v1/latest?access_key=c60fa9417eb80a12f50f60d8c369c08a',
		{
			method: 'GET',
		}
	);

	const exchangeData = await exchangeResponse.json();

	fourCurrencies.map((item) => {
		const itemObj = {
			symbol: item,
			priceUSD: exchangeData.rates['USD'] / exchangeData.rates[item],
		};

		cryptoArray.push(itemObj);
	});
	return {
		props: { data: cryptoArray, currencyOptions: fullSymbolArray },
	};
};
