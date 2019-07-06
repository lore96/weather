import { combineReducers } from 'redux';
import Weather from './reducers/weather';

const weatherApp = combineReducers({
    Weather
});

export default weatherApp;