import React from 'react';
import {NavBarContainer, StyledLink, StyledRouteName} from './NavBar.style';
import {Routes} from '../../routes';
import { withRouter, RouteComponentProps } from 'react-router';

class NavBar extends React.PureComponent<RouteComponentProps> {
    
    render() {
        return <NavBarContainer>
            <StyledLink to={Routes.today.path}><StyledRouteName  className={this.props.location.pathname==='/today' ? 'active' : ''}>Today</StyledRouteName></StyledLink>
            <StyledLink to={Routes.tomorrow.path}><StyledRouteName className={this.props.location.pathname==='/tomorrow' ? 'active' : ''}>Tomorrow</StyledRouteName></StyledLink>
        </NavBarContainer>
    };
}

export default withRouter(NavBar);
