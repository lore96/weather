import {takeLatest, put, all} from 'redux-saga/effects';
import {weatherReceived, forecastReceived} from '../../model/actions';

const endpointWeather = 'https://api.openweathermap.org/data/2.5/weather?';

// get forecast every 3 hours, so next day is in 8 position
const endpointForecast = 'https://api.openweathermap.org/data/2.5/forecast?';
const apikey = 'c164c4f116a450a01bbd21524e76502e';

function* requestWeather(action: {
    type: string,
    city: Array<{
        name: string,
        country: string
    }>}) {
    let citiesPromise: any = [];

    console.log(['SAGA', 'WEATHER_SAGA', 'REQUEST_TODAY_WEATHER', action]);
    yield put({type: 'GET_TODAY_WEATHER_REQUEST'});

    citiesPromise = action.city.map((item, index) => {
        const queryParams = `q=${item.name},${item.country}&appid=${apikey}&units=metric`;
        return fetch(endpointWeather + queryParams).then(r => r.json());
    });

    const citiesWeatherResult = yield all(citiesPromise);

    console.log(['SAGA', 'WEATHER_SAGA', 'REQUEST_TODAY_WEATHER', 'RESPONSE', citiesWeatherResult]);

    yield put(weatherReceived(citiesWeatherResult));
};

function* requestTomorrowWeather(action: {
    type: string,
    city: Array<{
        name: string,
        country: string
    }>}) {
    let citiesPromise: any = [];

    console.log(['SAGA', 'WEATHER_SAGA', 'REQUEST_TOMORROW_WEATHER', action]);
    
    yield put({type: 'GET_TOMORROW_WEATHER_REQUEST'});

    citiesPromise = action.city.map((item, index) => {
        const queryParams = `q=${item.name},${item.country}&appid=${apikey}&units=metric`;
        return fetch(endpointForecast + queryParams).then(r => r.json());
    });

    const citiesWeatherResult = yield all(citiesPromise);

    console.log(['SAGA', 'WEATHER_SAGA', 'REQUEST_TOMORROW_WEATHER', 'RESPONSE', citiesWeatherResult]);

    // check for tomorrow, choosing 8 postion because 8x3 = 24 (reading forecast doc on openweather)
    let citiesForecastResult = citiesWeatherResult.map((item: any, key: any) => {
        return {
            name: item.city.name,
            dt: item.list[8].dt,
            main: item.list[8].main,
            weather: item.list[8].weather,
        }
    });

    yield put(forecastReceived(citiesForecastResult));
};



export function* watchForWeatherRequest() {
    yield takeLatest('REQUEST_TODAY_WEATHER', requestWeather);
}

export function* watchForTomorrowForecastRequest() {
    yield takeLatest('REQUEST_TOMORROW_WEATHER',  requestTomorrowWeather)
}