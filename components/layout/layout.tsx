import Navbar from './navbar';

type Props = {
    children: string | JSX.Element | JSX.Element[] 
  }

const Layout = ({ children }: Props) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
};

export default Layout;
