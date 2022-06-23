import { configureStore } from '@reduxjs/toolkit';
import counterReducer  from './slice/counter';
import logger from 'redux-logger'; // log cac tien trinh hoat cua redux

const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
export default store;