import classes from '../styles/aboutUs/whyUs.module.scss';

type WhyUsCardType = {
	title: string;
	message: string;
	icon: JSX.Element;
};

const WhyUsCard: React.FC<WhyUsCardType> = (props) => {
	return (
		<div className={classes.card}>
			{props.icon}
			<h3>{props.title}</h3>
			<p>{props.message}</p>
		</div>
	);
};

export default WhyUsCard;
