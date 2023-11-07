import { tableCellsData } from './market';

const TableItem: React.FC<{ data: tableCellsData; index: number }> = (
	props
) => {
	return (
		<tr>
			<td data-cell='id'>{props.index}</td>
			<td data-cell='name'>{props.data.name}</td>
			<td data-cell='price'>{props.data.quote.USD.price.toFixed(2)} $</td>
			<td data-cell='24 change'>
				{props.data.quote.USD.percent_change_24h.toFixed(2)}
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
