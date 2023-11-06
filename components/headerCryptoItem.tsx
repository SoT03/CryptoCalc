import classes from '../styles/headerCryptoItem.module.scss';

export type cryptoItem = {
	id: number;
	name: string;
	quote: { USD: { percent_change_24h: number; price: number } };
};

const HeaderCryptoItem: React.FC<{ data: cryptoItem; id: number }> = (
	props
) => {
	const precentChange24: any =
		props.data.quote.USD.percent_change_24h.toFixed(2);
	return (
		<li className={classes.item}>
			<img
				src={`https://s2.coinmarketcap.com/static/img/coins/128x128/${props.id}.png`}
				alt=''
			/>
			<h2>
				{props.data.name}{' '}
				<span
					className={
						precentChange24 >= 0
							? `${classes['green-text']}`
							: `${classes['red-text']}`
					}>
					{precentChange24} %
				</span>
			</h2>
			<h3>{props.data.quote.USD.price.toFixed(2)} $</h3>
		</li>
	);
};

export default HeaderCryptoItem;
