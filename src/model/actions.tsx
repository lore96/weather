export const RECEIVED_WEATHER = 'RECEIVED_WEATHER'
export const GET_TODAY_WEATHER_REQUEST = 'GET_TODAY_WEATHER_REQUEST';
export const RECEIVED_FORECAST = 'RECEIVED_FORECAST';

export function weatherReceived (newWeather: any) {
    return {
        type: RECEIVED_WEATHER,
        newWeather
    }
};

export function getTodayWeather (newWeather: any) {
    return {
        type: GET_TODAY_WEATHER_REQUEST,
        newWeather
    }
};

export function forecastReceived (newWeather: any) {
    return {
        type: RECEIVED_FORECAST,
        newWeather
    }
}

