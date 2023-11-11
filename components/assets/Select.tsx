const Select: React.FC<{ className: string }> = (props) => {
	return (
		<select className={props.className} value='hi'>
			Hi
		</select>
	);
};

export default Select;
