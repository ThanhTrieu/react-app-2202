import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import rootReducer from './reducers/index';
import rootSaga from './sagas/index';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = getDefaultMiddleware => getDefaultMiddleware({
    thunk: false,
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
}).concat(sagaMiddleware, logger);

const myConfigureStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        middleware
    });
    const persistor = persistStore(store);
    sagaMiddleware.run(rootSaga);
    return { store, persistor };
}
export default myConfigureStore;
