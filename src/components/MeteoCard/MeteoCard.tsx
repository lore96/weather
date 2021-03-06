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
        },
        weather: Array<{
            description: string,
            main: string
        }>,
    }, 
    date: Date
}
  
type MeteoCardProps = iProps;

interface MeteoCardState {
    place: string,
    temperature: string,
    date: Date,
    weather:  Array<{
        description: string,
        main: string
    }>,
    icon: string,
    iconColor: string

}

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 

export default class MeteoCard extends React.Component<MeteoCardProps, MeteoCardState> {
    constructor(props: MeteoCardProps) {
        super(props);


        this.state = {
            place: this.props.city ? this.props.city.name : '',
            temperature: this.props.city ? Math.round(parseInt(this.props.city.main.temp, 10)).toString() : '',
            date: this.props.date,
            weather: this.props.city && this.props.city.weather.length > 0 ? this.props.city.weather :[],
            icon: 'gray',
            iconColor: 'gray'
        }
        this.capitalize = this.capitalize.bind(this);
    }

    componentDidMount() {
        if(this.props.city && this.props.city.weather.length > 0) {
            switch(this.props.city.weather[0].main) {
                case 'Mist':
                    this.setState({icon: 'fas fa-cloud-sun', iconColor: 'white'});
                    break;
                case 'Clouds':
                    this.setState({icon: 'fas fa-cloud', iconColor: 'gray'});
                    break;
                case 'Rain':
                    this.setState({icon: 'fas fa-cloud-showers-heavy', iconColor: 'gray'})
                    break;
                case 'Sunny':
                    this.setState({icon: 'fas fa-sun', iconColor: 'yellow'});
                    break;
                default:
                    this.setState({icon: 'fas fa-sun', iconColor: 'yellow'});
            }

        }
    }

    capitalize(string: string) {
        return  string.charAt(0).toUpperCase() + string.slice(1)
    }

    render(){
        return  this.props.city ? <MeteoCardContainer>
            <PlaceContainer><StyledPlace>{this.state.place}</StyledPlace></PlaceContainer>
            <DateContainer><StyledDate>{this.capitalize(this.state.date.toLocaleDateString('it-IT', dateOptions))}</StyledDate></DateContainer>
            <TemperatureContainer><StyledIcon className={`${this.state.icon} ${this.state.iconColor}`} /><StyledTemperature>{this.state.temperature}°</StyledTemperature></TemperatureContainer>
            <WeatherContainer><StyledWeather>{this.capitalize(this.state.weather[0].description)}</StyledWeather></WeatherContainer>
        </MeteoCardContainer> : null
    }
}