import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';
import rootSaga from './sagas/index';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// config store
const configureStore = (defaultState = {}) => {
    const store = createStore(
        rootReducer,
        defaultState,
        applyMiddleware(
            sagaMiddleware,
            logger
        )
    );
    // running saga
    sagaMiddleware.run(rootSaga);
    return { store };
}
export default configureStore;