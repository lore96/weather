import { all, fork } from 'redux-saga/effects';
import {watchForWeatherRequest, watchForTomorrowForecastRequest} from './sagas/weatherSaga';

export function* rootSaga() {
    yield all([
       yield fork(watchForWeatherRequest),
       yield fork(watchForTomorrowForecastRequest)
    ]);
};