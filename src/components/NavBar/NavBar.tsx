import React from 'react';
import {NavBarContainer, StyledLink, StyledRouteName} from './NavBar.style';
import {Routes} from '../../routes';

export default class NavBar extends React.PureComponent {
    render() {
        console.log(this.props);

        return <NavBarContainer>
            <StyledLink to={Routes.today.path}><StyledRouteName>Today</StyledRouteName></StyledLink>
            <StyledLink to={Routes.tomorrow.path}><StyledRouteName>Tomorrow</StyledRouteName></StyledLink>
        </NavBarContainer>
    }
}