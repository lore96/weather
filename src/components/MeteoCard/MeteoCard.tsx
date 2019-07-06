import React from 'react';
import { MeteoCardContainer, 
    PlaceContainer, 
    DateContainer, 
    TemperatureContainer, 
    WeatherContainer, 
    StyledPlace, 
    StyledDate, 
    StyledTemperature, 
    StyledWeather,
    StyledIcon} from './MeteoCard.style';

interface iProps {
    city?: {
        name: string,
        main: {
            temp: string
        }
    }
}
  
type MeteoCardProps = iProps;

interface MeteoCardState {
    place: string,
    temperature: string,
    date: Date,
    weather: string
}

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 

export default class MeteoCard extends React.Component<MeteoCardProps, MeteoCardState> {
    constructor(props: MeteoCardProps) {
        super(props);


        this.state = {
            place: this.props.city ? this.props.city.name : '',
            temperature: this.props.city ? Math.round(parseInt(this.props.city.main.temp, 10)).toString() : '',
            date: new Date(),
            weather: 'Sunny'
        }
    }

    componentDidMount() {
        console.log(this.props.city);
    }

    render(){
        return  <MeteoCardContainer>
            <PlaceContainer><StyledPlace>{this.state.place}</StyledPlace></PlaceContainer>
            <DateContainer><StyledDate>{this.state.date.toLocaleDateString('it-IT', dateOptions)}</StyledDate></DateContainer>
            <TemperatureContainer><StyledIcon className="fas fa-sun" /><StyledTemperature>{this.state.temperature}°</StyledTemperature></TemperatureContainer>
            <WeatherContainer><StyledWeather>{this.state.weather}</StyledWeather></WeatherContainer>
        </MeteoCardContainer>
    }
}