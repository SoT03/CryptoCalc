import classes from '../styles/header.module.scss';

const Header = () => {
	return (
		<header className={classes.header}>
			<div className='bg-shadow'></div>
			<div className='wrapper'>
				<h1>Track and trade</h1>
				<h2>crypto currencies</h2>
				<button>Get started</button>
			</div>
		</header>
	);
};

export default Header;
