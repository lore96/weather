import {takeLatest, put} from 'redux-saga/effects';
import {weatherReceived} from '../../model/actions';

const endpoint = 'https://api.openweathermap.org/data/2.5/weather?';
const apikey = 'c164c4f116a450a01bbd21524e76502e';

function* requestWeather(action: {
    type: string,
    city: {
        name: string,
        country: string
    }}) {
    console.log(['SAGA', 'WEATHER_SAGA', 'REQUEST_TODAY_WEATHER', action]);
    const queryParams = `q=${action.city.name},${action.city.country}&appid=${apikey}`;

    yield put({type: 'GET_TODAY_WEATHER_REQUEST'});

    const jsonResp = yield fetch(endpoint + queryParams).then(r => r.json());
    console.log(['SAGA', 'WEATHER_SAGA', 'REQUEST_TODAY_WEATHER', 'RESPOSE', jsonResp]);

    yield put(weatherReceived(jsonResp));
};


export function* watchForWeatherRequest() {
    const test = yield takeLatest('REQUEST_TODAY_WEATHER', requestWeather);

    console.log(test);
}