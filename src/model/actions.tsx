export const WEATHER_RECEIVED = 'WEATHER_RECEIVED'

export function weatherReceived (newWeather: any) {
    return {
        type: WEATHER_RECEIVED,
        newWeather
    }
};