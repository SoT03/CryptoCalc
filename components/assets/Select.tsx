const Select: React.FC<{
	className: string;
	currencyOptions?: string[];
	selected?: string;
	onChangeCurrency: (e: any) => void;
}> = (props) => {
	return (
		<select
			className={props.className}
			value={props.selected}
			onChange={props.onChangeCurrency}>
			{props.currencyOptions?.map((optionItem) => (
				<option value={optionItem} key={optionItem}>
					{optionItem}
				</option>
			))}
		</select>
	);
};

export default Select;
