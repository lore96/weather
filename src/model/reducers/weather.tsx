export default function Weather(state = {}, action: {type: string, newWeather: Object, error?: any}) {
    switch(action.type) {
        case 'GET_TODAY_WEATHER_REQUEST':
            console.log(['REDUX', 'GET_TODAY_WEATHER_REQUEST', action ]);

            return {...state, isLoading: true}
        case 'GET_TOMORROW_WEATHER_REQUEST':
            console.log(['REDUX', 'GET_TOMORROW_WEATHER_REQUEST', action ]);

            return {...state, isLoading: true}
        case 'WEATHER_RECEIVED_ERROR':
                console.log(['REDUX', 'WEATHER_RECEIVED_ERROR', action ]);

                return {...state, isLoading: false, error: action.error}
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