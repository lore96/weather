import React, {Component} from 'react';
import {TodayContainer} from './Today.style';
import {RouteProps} from 'react-router-dom';
import MeteoCard from '../../components/MeteoCard/MeteoCard';
import {connect} from 'react-redux'
import Spinner from '../../components/Spinner/Spinner';

interface iProps {
    history: any,
    requestWeather: Function,
    weather: {
        isLoading: boolean,
        weather?: any
    } 
}
  
type TodayProps = iProps & RouteProps;

interface TodayState {
    weather: Array<any>,
    isLoading: boolean
}

const citiesList = [{name: 'Milan', country: 'it-It'}, {name: 'Berlin', country: 'de-DE'}, {name: 'Florence', country: 'it-IT'}, {name: 'Sicily', country: 'it-IT'}];

class Today extends Component<TodayProps, TodayState> {
    constructor(props: TodayProps) {
        super(props);

        this.state = {
            weather: [],
            isLoading: false
        }
    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
        console.log('PREVPROPS', prevProps.weather, 'NEWPROPS', this.props.weather);

        if(prevProps.weather !== this.props.weather) {
            this.setState({
                weather: this.props.weather.weather ? this.props.weather.weather : []
            });
        }

        if(prevProps.weather.isLoading !== this.props.weather.isLoading) {
            this.setState({
                isLoading: this.props.weather.isLoading
            });
        }
    }

    componentDidMount() {
        this.props.requestWeather(citiesList);
    }

    render(){
        const weatherCardJSX = this.state.weather.length > 0 ? this.state.weather.map((item, index) => {
            return <MeteoCard key={index} city={item}/>
        }) : <p>Empty state</p>;


        return this.state.isLoading ? <Spinner />:  <TodayContainer>
            {weatherCardJSX}
        </TodayContainer>
    }
}

const mapStateToProps = (state: any) => ({
    weather: state.Weather
  });
  
  const mapDispatchToProps = (dispatch: any) => ({
      requestWeather: (city: Array<{name: string, country: string}>) => {
          dispatch({ type: 'REQUEST_TODAY_WEATHER', city})
      }
  });   
  
  export default connect(mapStateToProps, mapDispatchToProps)(Today);