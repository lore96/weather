import React, {Component} from 'react';
import {ErrorContainer, StyledMessage, StyledLink} from './Error.style';
import {RouteProps} from 'react-router-dom';

interface iProps {
}
  
type ErrorProps = iProps & RouteProps;

export default class Error extends Component<ErrorProps> {
    constructor(props: ErrorProps) {
        super(props)
    }

    render() {
        return <ErrorContainer>
            <StyledMessage>Oops, something went wrong</StyledMessage>
            <StyledLink to="/today">Back to today weather</StyledLink>
        </ErrorContainer>
    }
}