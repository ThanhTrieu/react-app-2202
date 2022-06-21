// trong 1 ung dung chi co duy nhat 1 store

import { createStore, applyMiddleware } from 'redux';

// Logger with default options
import logger from 'redux-logger'; // log cac tien trinh hoat cua redux
import rootReducer from '../reducers/index';

const store = createStore(
    rootReducer,
    applyMiddleware(logger)
);
export default store;