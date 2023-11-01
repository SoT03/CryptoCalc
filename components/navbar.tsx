import Link from 'next/link';

import classes from '../styles/navbar.module.scss';
import { IconX, IconMenu2 } from '@tabler/icons-react';
import { useState } from 'react';

const Navbar = () => {
	const [mobileNavIsOpen, setMobileNavIsOpen] = useState(true);

	return (
		<nav className={classes.navbar}>
			<div className={`wrapper ${classes.nav}`}>
				<Link href='/' className={classes.logo}>
					CryptoCoin
				</Link>
				<ul>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/'>Market</Link>
					</li>
					<li>
						<Link href='/'>About Us</Link>
					</li>
					<li>
						<Link href='/'>Join Us</Link>
					</li>
				</ul>
				<menu>
					<IconX />
					<IconMenu2 />
				</menu>
			</div>
		</nav>

		// Mobile nav

		
	);
};

export default Navbar;
