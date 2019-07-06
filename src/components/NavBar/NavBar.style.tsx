import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavBarContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: black;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const StyledRouteName = styled.h2`
    color: white;
    text-decoration: none
    width: 100%;

    &.active {
        color: #f9a825
    }
`;

export const StyledLink = styled(Link)`
    display: flex;
    text-decoration: none
    width: 50%;
    justify-content: center;
    text-align: center;
`;