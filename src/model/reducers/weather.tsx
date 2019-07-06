export default function Weather(state = {}, action: {type: string, newWeather: Object}) {
    switch(action.type) {
        case 'GET_TODAY_WEATHER_REQUEST':
            console.log(['REDUX', 'GET_TODAY_WEATHER_REQUEST', action ]);

            return {...state, isLoading: true}
        case 'GET_TOMORROW_WEATHER_REQUEST':
            console.log(['REDUX', 'GET_TOMORROW_WEATHER_REQUEST', action ]);

            return {...state, isLoading: true}
        case 'RECEIVED_FORECAST': 
            console.log(['REDUX', 'RECEIVED_FORECAST', action ]);

            return {...state, weather: action.newWeather, isLoading: false}
        case 'RECEIVED_WEATHER':
            console.log(['REDUX', 'RECEIVED_WEATHER', action ]);

            return {...state, weather: action.newWeather, isLoading: false}
        default:
            return state;
    }
}