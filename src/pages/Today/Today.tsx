import React, {Component} from 'react';
import {TodayContainer} from './Today.style';
import {RouteProps} from 'react-router-dom';
import MeteoCard from '../../components/MeteoCard/MeteoCard';
import {connect} from 'react-redux'

interface iProps {
    history: any,
    requestWeather: Function
}
  
type TodayProps = iProps & RouteProps;

interface TodayState {
}

class Today extends Component<TodayProps, TodayState> {
    constructor(props: TodayProps) {
        super(props);
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
  });
  
  const mapDispatchToProps = (dispatch: any) => ({
      requestWeather: (city: {name: string, country: string}) => {
          dispatch({ type: 'REQUEST_WEATHER', city})
      }
  });   
  
  export default connect(mapStateToProps, mapDispatchToProps)(Today);