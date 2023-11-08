import classes from '../styles/aboutUs/whyUs.module.scss';
import { IconThumbUp } from '@tabler/icons-react';
import WhyUsCard from './whyUsCard';

const cardData = [
	{
		title: 'Clients satisfaction',
		message:
			'Over 50,000 satisfied customers whom we have helped to successfully invest their money',
		icon: IconThumbUp,
	},
];

const WhyUs = () => {
	return (
		<section className={`section ${classes['whyUs-hero']}`}>
			<h2>Why should you join us ?</h2>
			<div className='wrapper'>
				<div className={classes['card-box']}>
					{cardData.map((item) => (
						<WhyUsCard
							title={item.title}
							message={item.message}
							icon={<item.icon />}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyUs;
