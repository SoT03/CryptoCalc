import { useState } from 'react';
import classes from '../styles/market/market.module.scss';
import TableItem from './marketTableItem';
import { cryptoItem } from './headerCryptoItem';

export type tableCellsData = {
	id: number;
	name: string;
	symbol: string;
	circulating_supply: number;
	quote: {
		USD: {
			price: number;
			percent_change_24h: number;
			market_cap: number;
		};
	};
};

const Market: React.FC<{ data: [tableCellsData] }> = (props) => {
	const [pageNumber, setPageNumber] = useState(1);

	const paginationButtons = [];
	for (let i = 1; i <= 5; i++) {
		paginationButtons.push(
			<button key={i} onClick={() => setPageNumber(i)}>
				{i}
			</button>
		);
	}

	const tableData = props.data.slice(0, pageNumber * 10);
	console.log(tableData);

	return (
		<section className='wrapper section' id='market'>
			<h2>Market update</h2>

			<table className={classes.table}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Price</th>
						<th>24 Change</th>
						<th>Market Cap</th>
						<th>Circulating Supply</th>
					</tr>
				</thead>
				<tbody>
					{tableData.map((item) => {
						const index = tableData.indexOf(item) + 1;
						return <TableItem key={item.id} data={item} index={index} />;
					})}
				</tbody>
			</table>

			<menu>{paginationButtons}</menu>
		</section>
	);
};

export default Market;
