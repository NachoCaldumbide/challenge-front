import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

export const Wrapper = styled(Box)`
    display: flex;
    width: 80%;
    padding: 20px;
    flex-direction: column;
`;

export const Title = styled(Typography)`
	margin-bottom: 15px;
	font-size: 25px;
    align-self: center;
`;

const Input = styled.input`
    outline: none;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid black;
    width: fill-available;
`;

export const TextBox = ({onSubmit, ...props}) => {
	return(
		<form onSubmit={onSubmit}>
			<Input {...props} />
		</form>
	);
};

export const DeleteButton = styled(Typography)`
    cursor: pointer;
`;

export const InputWrapper = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const AddTaskInputWrapper = styled(Box)`
    display: flex;
    align-items: center;
    gap: 5px;
`;