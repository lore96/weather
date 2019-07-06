import React from 'react';
import {SpinnerContainer, Dot1, Dot2} from './Spinner.style';

export default class Spinner extends React.PureComponent {
    render() {
        return (
            <SpinnerContainer>
              <Dot1></Dot1>
              <Dot2></Dot2>
            </SpinnerContainer>
        )
    }
  }