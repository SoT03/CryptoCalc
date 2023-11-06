import classes from '../styles/market/market.module.scss';

const Market: React.FC = () => {
	const paginationButtons = [];
	for (let i = 1; i <= 5; i++) {
		paginationButtons.push(<button key={i}>{i}</button>);
	}

	return (
		<section className='wrapper section'>
			<h2 className=''>
				Market update <hr />
			</h2>

			<table className={classes.table}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Price</th>
						<th>24 Change</th>
						<th>Market Cap</th>
						<th>Circulating Supply</th>
					</tr>
				</thead>
				<tbody>{/* TODO:	Map every currencie here */}</tbody>
			</table>

			<menu>{paginationButtons}</menu>
		</section>
	);
};

export default Market;
