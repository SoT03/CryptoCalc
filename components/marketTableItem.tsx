import { tableCellsData } from './market';

const TableItem: React.FC<{ data: tableCellsData; index: number }> = (
	props
) => {
	const precentChange24: any =
		props.data.quote.USD.percent_change_24h.toFixed(2);

	return (
		<tr>
			<td data-cell='id'>{props.index}</td>
			<td data-cell='name'>
				<span>
					<img
						src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${props.data.id}.png`}
						alt=''
					/>
					{props.data.name}
				</span>
			</td>
			<td data-cell='price'>{props.data.quote.USD.price.toFixed(2)} $</td>
			<td
				data-cell='24 change'
				className={precentChange24 >= 0 ? 'green-text' : 'red-text'}>
				{precentChange24} %
			</td>
			<td data-cell='market cap'>
				{props.data.quote.USD.market_cap.toFixed()}
			</td>
			<td data-cell='circulating suply'>
				{props.data.circulating_supply.toFixed()} {props.data.symbol}
			</td>
		</tr>
	);
};

export default TableItem;
