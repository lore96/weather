import React, {Component} from 'react';
import {TodayContainer} from './Today.style';
import {RouteProps} from 'react-router-dom';

interface iProps {
    history: any,
  }
  
  type TodayProps = iProps & RouteProps;
  
  interface TodayState {
  }

export default class Today<TodayProps, TodayState> extends Component {
    constructor(props: TodayProps) {
        super(props);
    }

    render(){
        return <TodayContainer>
                
        </TodayContainer>
    }
}
