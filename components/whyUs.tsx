import classes from '../styles/aboutUs/whyUs.module.scss';
import WhyUsCard from './whyUsCard';

const WhyUs = () => {
	return (
		<section className={`section ${classes['whyUs-hero']}`}>
			<h2>Why should you join us ?</h2>
			<div className='wrapper'>
				<WhyUsCard />
			</div>
		</section>
	);
};

export default WhyUs;
