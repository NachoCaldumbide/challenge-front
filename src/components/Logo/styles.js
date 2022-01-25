import { Box, Link as LinkComponent } from '@mui/material';
export { Box as ImageWrapper, Typography as TextLogo } from '@mui/material';
import styled from '@emotion/styled';

export const Wrapper = styled(Box)`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Link = styled(LinkComponent)`
    text-decoration: none;
    color: white;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;