import React, {Component} from 'react';
import {TomorrowContainer} from './Tomorrow.style';
import {RouteProps} from 'react-router-dom';

interface iProps {
    history: any,
  }
  
  type TomorrowProps = iProps & RouteProps;
  
  interface TomorrowState {
  }

export default class Home<TomorrowProps, TomorrowState> extends Component {
    constructor(props: TomorrowProps) {
        super(props);
    }

    render(){
        return <TomorrowContainer>
                
        </TomorrowContainer>
    }
}
