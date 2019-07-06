import {takeLatest, put, all} from 'redux-saga/effects';
import {weatherReceived, forecastReceived, weatherReceivedError, forecastReceivedError} from '../../model/actions';

const endpointWeather = 'https://api.openweathermap.org/data/2.5/weather?';

// get forecast every 3 hours, so next day is in 8 position
const endpointForecast = 'https://api.openweathermap.org/data/2.5/forecast?';
const apikey = 'c164c4f116a450a01bbd21524e76502e';

/*** ATTENTION: NOT ABLE TO CATCH IN ANY WAY YIELD ALL PROMISES; RESPONSE IS ALWAYS A SUCCESS ***/

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
        return fetch(endpointWeather + queryParams)
        .then(r => { 
            return r.json();
        }).catch(e => {console.log(e)});
    });

    const citiesWeatherResult = yield all(citiesPromise);

    let hasError = false;

    for(let i in citiesWeatherResult) {
        if(citiesWeatherResult[i].cod !== 'undefined' 
            && citiesWeatherResult[i].cod !== 200 ) {
            hasError = citiesWeatherResult[i];
        }
    }
    
    console.log(['SAGA', 'WEATHER_SAGA', 'REQUEST_TODAY_WEATHER', 'RESPONSE', citiesWeatherResult]);

    if(hasError) {
        yield put(weatherReceivedError(hasError));
    } else {
        yield put(weatherReceived(citiesWeatherResult));
    }
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
        return fetch(endpointForecast + queryParams)
        .then(r => r.json())
        .catch(e => {console.log(e)});
    });

    const citiesWeatherResult = yield all(citiesPromise);

    console.log(['SAGA', 'WEATHER_SAGA', 'REQUEST_TOMORROW_WEATHER', 'RESPONSE', citiesWeatherResult]);

    let hasError = false;

    for(let i in citiesWeatherResult) {
        if(citiesWeatherResult[i].cod !== 'undefined' 
            && parseInt(citiesWeatherResult[i].cod, 10) !== 200){ // 200 as string or integer ??? --> api open weather
            console.log(hasError, citiesWeatherResult, citiesWeatherResult[i].cod, (citiesWeatherResult[i].cod !== 200 || citiesWeatherResult[i].cod !== '200'), citiesWeatherResult[i].cod !== 'undefined');
            hasError = citiesWeatherResult[i];
        }
    }

    if(hasError) {
        console.log('hase error', hasError);
        yield put(forecastReceivedError(hasError));
    } else {
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
    } 
};



export function* watchForWeatherRequest() {
    yield takeLatest('REQUEST_TODAY_WEATHER', requestWeather);
}

export function* watchForTomorrowForecastRequest() {
    yield takeLatest('REQUEST_TOMORROW_WEATHER',  requestTomorrowWeather)
}