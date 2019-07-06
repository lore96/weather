import {takeLatest, take, put} from 'redux-saga/effects';

const endpoint = 'https://api.openweathermap.org/data/2.5/weather?';
const apikey = 'c164c4f116a450a01bbd21524e76502e';

export function* watchForWeatherRequest() {
    const test = yield takeLatest('REQUEST_WEATHER', function requestWeather(action: {
        type: string,
        city: {
            name: string,
            country: string
        }}) {
        console.log(['SAGA', 'WEATHER_SAGA', 'REQUEST_WEATHER', action]);
        const queryParams = `q=${action.city.name},${action.city.country}&appid=${apikey}`;

        window.fetch(endpoint + queryParams).then(r => r.json()).then((resp) => {
            console.log(resp);
        })
    });
}