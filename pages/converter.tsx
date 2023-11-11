import Layout from '@/components/layout/layout';

import classes from '../styles/converter/converter.module.scss';

const ConverterPage = () => {
	return (
		<Layout>
			<main className={classes.calculator}>
				<div className='wrapper'>
					<div>
						<div>
							<input type='number' value='1' />
							<select id='currency-one'>
								<option value='PLN' selected>
									PLN
								</option>
								<option value='USD'>USD</option>
								<option value='GBP'>GBP</option>
								<option value='EUR'>EUR</option>
								<option value='CHF'>CHF</option>
							</select>
						</div>
						<button></button>

						<div>
							<input type='number' disabled />
							<select id='currency-two'>
								<option value='PLN'>PLN</option>
								<option value='USD' selected>
									USD
								</option>
								<option value='GBP'>GBP</option>
								<option value='EUR'>EUR</option>
								<option value='CHF'>CHF</option>
							</select>
						</div>
					</div>
					<p></p>
				</div>
			</main>
		</Layout>
	);
};

export default ConverterPage;
