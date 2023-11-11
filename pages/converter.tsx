import Layout from '@/components/layout/layout';
import { IconArrowsLeftRight } from '@tabler/icons-react';

import classes from '../styles/converter/converter.module.scss';

const ConverterPage = () => {
	const currenciesList = (
		<select id='currency-one' className={classes['calc__box-select']}>
			<option value='PLN' selected>
				PLN
			</option>
			<option value='USD'>USD</option>
			<option value='GBP'>GBP</option>
			<option value='EUR'>EUR</option>
			<option value='Crypto Currencies' disabled>
				Crypto Currencies
			</option>
			<option value='USD'>BTC</option>
			<option value='GBP'>BTC</option>
			<option value='EUR'>BTC</option>
			<option value='USD'>BTC</option>
			<option value='GBP'>BTC</option>
			<option value='EUR'>BTC</option>
		</select>
	);

	return (
		<Layout>
			<main className={classes.calculator}>
				<div className='wrapper'>
					<div className={classes.calc}>
						<input
							type='number'
							value='1'
							className={classes['calc__amount']}
						/>
						<div className={classes['calc__box']}>
							{currenciesList}
							<button className={classes['calc__box-btn']}>
								<IconArrowsLeftRight />
							</button>

							<div>{currenciesList}</div>
						</div>
					</div>
					<p></p>
				</div>
			</main>
		</Layout>
	);
};

export default ConverterPage;
