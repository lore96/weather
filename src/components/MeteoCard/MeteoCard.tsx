import React, { Component } from 'react';
import { MeteoCard, 
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
    weather?: string
}
  
type MeteoWidgetProps = iProps;

interface MeteoWidgetState {
    place: string,
    temperature: string,
    date: Date,
    weather: string
}

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 

export default class MeteoWidget extends React.Component<MeteoWidgetProps, MeteoWidgetState> {
    constructor(props: MeteoWidgetProps) {
        super(props);


        this.state = {
            place: 'Florence',
            temperature: '32',
            date: new Date(),
            weather: 'Sunny'
        }
    }

    render(){
        return  <MeteoCard>
            <PlaceContainer><StyledPlace>{this.state.place}</StyledPlace></PlaceContainer>
            <DateContainer><StyledDate>{this.state.date.toLocaleDateString('it-IT', dateOptions)}</StyledDate></DateContainer>
            <TemperatureContainer><StyledIcon className="fas fa-sun" /><StyledTemperature>{this.state.temperature}°</StyledTemperature></TemperatureContainer>
            <WeatherContainer><StyledWeather>{this.state.weather}</StyledWeather></WeatherContainer>
        </MeteoCard>
    }
}