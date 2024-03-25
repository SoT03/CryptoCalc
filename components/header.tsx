import { IconCoin, IconCurrencyBitcoin } from '@tabler/icons-react';
import classes from '../styles/header/header.module.scss';
import HeaderCryptoItem from './headerCryptoItem';
import { cryptoItem } from './headerCryptoItem';
import Link from 'next/link';
import img1 from '../public/static/img/bitcoin.png';
import img2 from '../public/static/img/ethereum.png';
import Image from 'next/image';

const Header: React.FC<{ data: [cryptoItem] }> = (props) => {
	return (
		<header className={classes.header} id='home'>
			<Image
				src={img1.src}
				alt='Bitcoin coin'
				width={172}
				height={172}
				className={classes['header-coins--left']}
			/>
			<Image
				src={img2.src}
				alt='Etherum coin'
				width={172}
				height={172}
				className={classes['header-coins--right']}
			/>
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
