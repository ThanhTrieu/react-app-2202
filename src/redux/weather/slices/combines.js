import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import weatherReducer from './weather';

const configWeatherPersistReducer = {
    key: 'weather-persist-reducer',
    storage:  storage,
    whitelist: ['dataWeathers'] // (state nam trong reducer) luu data vao local storage
}

const configRootPersistReducer = {
    key: 'root-persist-reducer',
    storage: storage,
    whitelist: ['weather'] // ten cua reducer
}

const rootReducer = combineReducers({
    weather: persistReducer(configWeatherPersistReducer, weatherReducer),
    // khai cac reducer khac o day
});

// reducer nay se luu trong store
export default persistReducer(configRootPersistReducer, rootReducer);