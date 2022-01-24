import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

export const Wrapper = styled(Box)`
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
    width: 40%;
    padding: 20px;
    border-radius: 10px;
    z-index: 0;
    display: flex;
    flex-direction: column;
`;

export const Title = styled(Typography)`
	margin-bottom: 15px;
	font-size: 25px;
    align-self: center;
`;

const AddTaskInput = styled.input`
    outline: none;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid black;
    width: fill-available;
`;

export const AddTaskComponent = ({onSubmit, ...props}) => {
	return(
		<form onSubmit={onSubmit}>
			<AddTaskInput {...props} />
		</form>
	);
};

export const DeleteButton = styled(Typography)`
    cursor: pointer;
`;