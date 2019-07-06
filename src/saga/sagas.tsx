import { all, fork } from 'redux-saga/effects';
import {watchForWeatherRequest} from './sagas/weatherSaga';

export function* rootSaga() {
    yield all([
       yield fork(watchForWeatherRequest)
    ]);
};