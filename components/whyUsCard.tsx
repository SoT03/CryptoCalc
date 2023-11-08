import { TablerIconsProps } from '@tabler/icons-react';

type WhyUsCardType = {
	title: string;
	message: string;
	icon: JSX.Element;
};

const WhyUsCard: React.FC<WhyUsCardType> = (props) => {
	return (
		<div className='card'>
			{props.icon}
			<h3>{props.title}</h3>
			<p>{props.message}</p>
		</div>
	);
};

export default WhyUsCard;
