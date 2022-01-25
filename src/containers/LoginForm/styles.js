import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

export const Wrapper = styled(Box)`
	box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
	border-radius: 5px;
	padding: 40px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 250px;
`;

export const Title = styled(Typography)`
	margin-bottom: 15px;
	font-size: 23px;
`;