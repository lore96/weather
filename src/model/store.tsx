import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../saga/sagas';

import weatherApp from './reducers';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(weatherApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;