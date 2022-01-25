import MenuItem from '@mui/material/MenuItem';
import SelectComponent from '@mui/material/Select';

const Select = ({ value, onChange, children, ...props }) => {
	return (
		<SelectComponent
			value={value}
			onChange={onChange}
			{...props}
		>
			{children}
		</SelectComponent>
	);
};

export const Option = ({ children, value, ...props }) => {
	return (
		<MenuItem value={value} {...props}>
			{children}
		</MenuItem>
	);
};

export default Select;