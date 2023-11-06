import classes from '../styles/market/market.module.scss';

const Market: React.FC = () => {
	return (
		<section className='wrapper section'>
			<h2 className=''>
				Market update <hr />
			</h2>

			<table className={classes.table}></table>
		</section>
	);
};

export default Market;
