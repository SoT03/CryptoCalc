import classes from '../styles/aboutUs/whyUs.module.scss';
import {
	IconThumbUp,
	IconWallet,
	IconHeartHandshake,
	IconDeviceMobileMessage,
	IconBrandDiscord,
	IconVector,
} from '@tabler/icons-react';
import WhyUsCard from './whyUsCard';

const cardData = [
	{
		title: 'Satisfaction',
		message:
			'Over 50,000 satisfied customers whom we have helped to successfully invest their money.',
		icon: IconThumbUp,
	},
	{
		title: 'Safety',
		message: 'Connect your wallet using Trust Wallet or Metamask.',
		icon: IconWallet,
	},
	{
		title: 'Contact with us',
		message: 'We are online 24h to answer your questions !',
		icon: IconHeartHandshake,
	},
	{
		title: 'Notifications',
		message:
			'You will recive notifications with special offers and informations from us.',
		icon: IconDeviceMobileMessage,
	},
	{
		title: 'All in one place',
		message: 'You can invest, observe and sell everything at one place.',
		icon: IconVector,
	},
	{
		title: 'Our community',
		message:
			'We have a large discord server where you can talk to other people about crypto and more.',
		icon: IconBrandDiscord,
	},
];

const WhyUs = () => {
	return (
		<section className={`section ${classes['whyus-hero']}`}>
			<div className="bg-shadow"></div>
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
