import AppBar from '@mui/material/AppBar';
import { Container, Toolbar, Box } from '@mui/material';
import styled from '@emotion/styled';

const Nav = styled(Toolbar)`
    justify-content: space-between;
`;

export const Wrapper = ({ children }) => {
	return (
		<AppBar
			position="static"
			elevation={0}
		>
			<Container maxWidth="xl">
				<Nav>
					{children}
				</Nav>
			</Container>
		</AppBar >
	);
};

export const AccessButtonsWrapper = styled(Box)`
    display: flex;
    gap: 10px;
`;