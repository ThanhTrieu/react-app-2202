import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import weatherReducer from './slices/weather';
import rootSaga from './sagas/index';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({thunk: false}), sagaMiddleware, logger];

const myConfigureStore = () => {
    const store = configureStore({
        reducer: {
            weather: weatherReducer
        },
        middleware: middleware
    });
    sagaMiddleware.run(rootSaga);
    return { store };
}
export default myConfigureStore;