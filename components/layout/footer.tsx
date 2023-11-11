import classes from '../../styles/footer.module.scss';

const Footer = () => {
	const dataYear: number = new Date().getFullYear();

	return (
		<footer className={classes.footer}>CryptoCoin {dataYear} &copy;</footer>
	);
};

export default Footer;
