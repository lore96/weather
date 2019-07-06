import React, {Component} from 'react';
import {TodayContainer, TodayTitle, TodayWeatherContainer, EmptyMessage} from './Today.style';
import {RouteProps} from 'react-router-dom';
import MeteoCard from '../../components/MeteoCard/MeteoCard';
import {connect} from 'react-redux'
import Spinner from '../../components/Spinner/Spinner';

interface iProps {
    history: any,
    requestWeather: Function,
    weather: {
        isLoading: boolean,
        weather?: any,
        error?: any
    },
    cities: Array<{
        name: string,
        country: string
    }>
}
  
type TodayProps = iProps & RouteProps;

interface TodayState {
    weather: Array<any>,
    isLoading: boolean
}


class Today extends Component<TodayProps, TodayState> {
    constructor(props: TodayProps) {
        super(props);

        this.state = {
            weather: [],
            isLoading: false
        }
    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
        if(prevProps.weather !== this.props.weather && !this.props.weather.error) {
            this.setState({
                weather: this.props.weather.weather ? this.props.weather.weather : []
            });
        } else if(typeof this.props.weather.error !== 'undefined') {
            this.props.history.push('/error');
        }

        if(prevProps.weather.isLoading !== this.props.weather.isLoading) {
            this.setState({
                isLoading: this.props.weather.isLoading
            });
        }
    }

    componentDidMount() {
        this.props.requestWeather(this.props.cities);
    }

    render(){
        const weatherCardJSX = this.state.weather.length > 0 ? this.state.weather.map((item, index) => {
            return <MeteoCard key={index} city={item} date={new Date()}/>
        }) : <EmptyMessage>No weather is selected</EmptyMessage>;


        return this.state.isLoading ? <Spinner /> : <TodayContainer>
            <TodayTitle>Weather of today</TodayTitle>
            <TodayWeatherContainer>
                {weatherCardJSX}
            </TodayWeatherContainer>
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