export const GET_TODAY_WEATHER_REQUEST = 'GET_TODAY_WEATHER_REQUEST';
export const GET_TOMORROW_WEATHER_REQUEST = 'GET_TOMORROW_WEATHER_REQUEST';

export const RECEIVED_WEATHER = 'RECEIVED_WEATHER'
export const RECEIVED_FORECAST = 'RECEIVED_FORECAST';

export const WEATHER_RECEIVED_ERROR = 'WEATHER_RECEIVED_ERROR';

export function weatherReceived (newWeather: any) {
    return {
        type: RECEIVED_WEATHER,
        newWeather
    }
};

export function weatherReceivedError (error: any) {
    return {
        type: WEATHER_RECEIVED_ERROR,
        error
    }
};

export function getTodayWeather (newWeather: any) {
    return {
        type: GET_TODAY_WEATHER_REQUEST,
        newWeather
    }
};

export function getTomorrowWeather (newWeather: any) {
    return {
        type: GET_TOMORROW_WEATHER_REQUEST,
        newWeather
    }
};

export function forecastReceived (newWeather: any) {
    return {
        type: RECEIVED_FORECAST,
        newWeather
    }
}

