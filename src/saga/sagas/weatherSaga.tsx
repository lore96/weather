import {takeLatest, put, all} from 'redux-saga/effects';
import {weatherReceived} from '../../model/actions';

const endpoint = 'https://api.openweathermap.org/data/2.5/weather?';
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
        return fetch(endpoint + queryParams).then(r => r.json());
    });

    const citiesWeatherResult = yield all(citiesPromise);

    console.log(['SAGA', 'WEATHER_SAGA', 'REQUEST_TODAY_WEATHER', 'RESPONSE', citiesWeatherResult]);

    yield put(weatherReceived(citiesWeatherResult));
};


export function* watchForWeatherRequest() {
    yield takeLatest('REQUEST_TODAY_WEATHER', requestWeather);
}