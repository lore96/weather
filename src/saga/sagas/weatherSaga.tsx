import {takeLatest, take, put} from 'redux-saga/effects';

export function* watchForWeatherRequest() {
    const test = yield takeLatest('REQUEST_WEATHER', function requestWeather(action) {
        console.log(['SAGA', 'WEATHER_SAGA', 'REQUEST_WEATHER', action]);
    });
}