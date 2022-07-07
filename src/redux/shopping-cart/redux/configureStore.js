import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index';
import rootSaga from './sagas/index';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = getDefaultMiddleware => getDefaultMiddleware({
    thunk: false
}).concat(sagaMiddleware, logger);

const myConfigureStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        middleware
    });
    sagaMiddleware.run(rootSaga);
    return { store };
}
export default myConfigureStore;
