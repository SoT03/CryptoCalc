import Link from 'next/link';

import classes from '../../styles/navbar.module.scss';
import { IconX, IconMenu2 } from '@tabler/icons-react';
import { useState } from 'react';

const Navbar = () => {
	const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

	const mobileNavHandler = () => {
		setMobileNavIsOpen(!mobileNavIsOpen);
	};

	return (
		<nav className={classes.navbar}>
			<div className={`wrapper ${classes.nav}`}>
				<Link href='/' className={classes.logo}>
					CryptoCoin
				</Link>
				<ul className={mobileNavIsOpen ? `${classes['mobile-open']}` : ''}>
					<li>
						<Link href='/#home'>Home</Link>
					</li>
					<li>
						<Link href='/#market'>Market</Link>
					</li>
					<li>
						<Link href='/#aboutus'>About Us</Link>
					</li>
					<li>
						<Link href='/converter'>Converter</Link>
					</li>
				</ul>
				<menu>
					{mobileNavIsOpen && <IconX onClick={mobileNavHandler} />}
					{!mobileNavIsOpen && <IconMenu2 onClick={mobileNavHandler} />}
				</menu>
			</div>
		</nav>
	);
};

export default Navbar;
