export default function Weather(state: any = {weather: [], isLoading: false, error: false}, action: {type: string, newWeather: Object, error?: any}) {
    switch(action.type) {
        case 'GET_TODAY_WEATHER_REQUEST':
            console.log(['REDUX', 'GET_TODAY_WEATHER_REQUEST', action ]);

            return {isLoading: true}
        case 'GET_TOMORROW_WEATHER_REQUEST':
            console.log(['REDUX', 'GET_TOMORROW_WEATHER_REQUEST', action ]);

            return Object.assign({}, state, {isLoading: true})
        case 'WEATHER_RECEIVED_ERROR':
                console.log(['REDUX', 'WEATHER_RECEIVED_ERROR', action ]);

            return Object.assign({}, state, {isLoading: false, error: action.error})
        case 'FORECAST_RECEIVED_ERROR':
            console.log(['REDUX', 'FORECAST_RECEIVED_ERROR', action ]);

            return Object.assign({}, state, {isLoading: false, error: action.error})
        case 'RECEIVED_FORECAST': 
            console.log(['REDUX', 'RECEIVED_FORECAST', action ]);

            return Object.assign({}, state, {isLoading: false, weather: action.newWeather, error: false})
        case 'RECEIVED_WEATHER':
            console.log(['REDUX', 'RECEIVED_WEATHER', action ]);

            return Object.assign({}, state, {isLoading: false,  weather: action.newWeather, error: false});
        default:
            return state;
    }
}