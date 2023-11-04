export type cryptoItem = {
	id: number;
	name: string;
	quote: { USD: { percent_change_24h: number; price: number } };
};

const HeaderCryptoItem: React.FC<{ data: cryptoItem }> = (props) => {
	console.log(props.data);
	return (
		<li>
			<img src='' alt='' />
			<h2>
				{props.data.name} {props.data.quote.USD.percent_change_24h.toFixed(2)}%
			</h2>
			<p>{props.data.quote.USD.price.toFixed(2)} $</p>
		</li>
	);
};

export default HeaderCryptoItem;
