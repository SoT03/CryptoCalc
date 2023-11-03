import classes from '../styles/header.module.scss';

const Header = () => {
	return (
		<header className={classes.header}>
			{/* <div className='bg-shadow'></div> */}
			<div className='wrapper'>
				<h1>
					Track, trade and make <span>profit</span>
				</h1>
				<p>Learn how to make money from crypto currencies with our help.</p>
				<button>Get Started</button>
			</div>
		</header>
	);
};

export default Header;
