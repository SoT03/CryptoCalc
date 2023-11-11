import Navbar from './navbar';
import Footer from './footer';

type Props = {
	children: string | JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
