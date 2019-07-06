import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const ErrorContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const StyledMessage = styled.h1`
    color: white;
    text-align: center;
`;

export const StyledLink = styled(Link)`
    color: white;
    font-weight: bold;
    text-decoration: none;
`;