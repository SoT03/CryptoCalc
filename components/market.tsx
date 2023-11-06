import { useState } from 'react';
import classes from '../styles/market/market.module.scss';
import TableItem from './marketTableItem';

const Market: React.FC = () => {
	const [pageNumber, setPageNumber] = useState(1);

	const paginationButtons = [];
	for (let i = 1; i <= 5; i++) {
		paginationButtons.push(
			<button key={i} onClick={() => setPageNumber(i)}>
				{i}
			</button>
		);
	}

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
					<TableItem />
					<TableItem />
					<TableItem />
				</tbody>
			</table>

			<menu>{paginationButtons}</menu>
		</section>
	);
};

export default Market;
