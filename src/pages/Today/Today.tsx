import React, {Component} from 'react';
import {TodayContainer} from './Today.style';
import {RouteProps} from 'react-router-dom';

import MeteoWidget from '../../components/MeteoCard/MeteoCard';

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

    componentDidMount() {
        window.fetch('api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c164c4f116a450a01bbd21524e76502e')
            .then(r => r.json())
            .then((r) => {
                console.log(r);
        });
    }

    render(){
        return <TodayContainer>
                <MeteoWidget />
                <MeteoWidget />
        </TodayContainer>
    }
}
