import { IconCoin, IconCurrencyBitcoin } from '@tabler/icons-react';
import classes from '../styles/header/header.module.scss';
import HeaderCryptoItem from './headerCryptoItem';
import { cryptoItem } from './headerCryptoItem';
import Link from 'next/link';

const Header: React.FC<{ data: [cryptoItem] }> = (props) => {
	return (
		<header className={classes.header} id='home'>
			<div className='wrapper'>
				<h1>
					Track, trade and <span className={classes.gradient}>make profit</span>
				</h1>
				<p>Learn how to make money from crypto currencies with our help.</p>
				<Link href='#aboutus'>About Us</Link>

				<IconCoin className={classes['coin-icon']} />
				<IconCurrencyBitcoin className={classes['bitcoin-icon']} />

				<ul className={classes['popular-crypto']}>
					{props.data.map((item) => (
						<HeaderCryptoItem key={item.id} id={item.id} data={item} />
					))}
				</ul>
			</div>
		</header>
	);
};

export default Header;
