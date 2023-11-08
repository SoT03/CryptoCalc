import classes from '../styles/aboutUs/aboutUs.module.scss';

const AboutUs: React.FC = () => {
	return (
		<section className='section section--second' id='aboutus'>
			<div className='wrapper'>
				<h2>about us</h2>

				<div className={classes['about-us']}>
					<div>
						<h3>What is CryptoCoin ?</h3>
						<p>
							"Cryptocoin" is a group of specialists involved in observing and
							researching the cryptocurrency market. Every day we share our
							observations with hundreds of our customers who trust us. We help
							them profit and understand how the market works.{' '}
						</p>
					</div>
					<img src='/static/img/team-small.jpg' alt='Team of our analysts' />
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
