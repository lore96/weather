import React, {Component} from 'react';
import {TodayContainer} from './Today.style';
import {RouteProps} from 'react-router-dom';
import MeteoCard from '../../components/MeteoCard/MeteoCard';
import {connect} from 'react-redux'

interface iProps {
    history: any,
    requestWeather: Function,
    weather: Object
}
  
type TodayProps = iProps & RouteProps;

interface TodayState {
}

class Today extends Component<TodayProps, TodayState> {
    constructor(props: TodayProps) {
        super(props);
    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
        if(prevProps.Weather !== this.props.weather) {
            console.log('PREVPROPS', prevProps.weather, 'NEWPROPS', this.props.weather);
        }
    }

    componentDidMount() {
        // window.fetch('https://api.openweathermap.org/data/2.5/weather?q=FLORENCE,it&APPID=c164c4f116a450a01bbd21524e76502e')
        //     .then(r => r.json())
        //     .then((r) => {
        //         console.log(r);
        // });
        this.props.requestWeather({name: 'Florence', country: 'it-It'});
    }

    render(){
        return <TodayContainer>
                <MeteoCard />
                <MeteoCard />
        </TodayContainer>
    }
}

const mapStateToProps = (state: any) => ({
    weather: state.Weather
  });
  
  const mapDispatchToProps = (dispatch: any) => ({
      requestWeather: (city: {name: string, country: string}) => {
          dispatch({ type: 'REQUEST_TODAY_WEATHER', city})
      }
  });   
  
  export default connect(mapStateToProps, mapDispatchToProps)(Today);