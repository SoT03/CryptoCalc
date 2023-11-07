import Image from 'next/image';
import teamPic from '../public/img/team-small.jpg';

const AboutUs: React.FC = () => {
	return (
		<section className='wrapper section' id='aboutUs'>
			<h2>about us</h2>

			<div>
				<div>
					<h3>Who are we ?</h3>
					<p>
						"Cryptocoin" is a group of specialists involved in observing and
						researching the cryptocurrency market. Every day we share our
						observations with hundreds of our customers who trust us. We help
						them profit and understand how the market works.{' '}
					</p>
				</div>
				<Image
					src={teamPic}
					width={480}
					height={320}
					alt='Team of our analysts'
				/>
			</div>
		</section>
	);
};

export default AboutUs;
