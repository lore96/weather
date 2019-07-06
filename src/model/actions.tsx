export const RECEIVED_WEATHER = 'RECEIVED_WEATHER'
export const GET_TODAY_WEATHER_REQUEST = 'GET_TODAY_WEATHER_REQUEST';

export function weatherReceived (newWeather: any) {
    return {
        type: RECEIVED_WEATHER,
        newWeather
    }
};

export function getTodayWeather (newWeather: any) {
    console.log('newWeather', newWeather);
    
    return {
        type: GET_TODAY_WEATHER_REQUEST,
        newWeather
    }
};

