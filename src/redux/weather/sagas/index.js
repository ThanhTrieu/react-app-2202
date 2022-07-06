import { call, all } from 'redux-saga/effects';
import { watchWeatherSaga } from './weather';

export default function* rootSaga(){
    yield all([
        call(watchWeatherSaga)
        // chay cac saga khac neu co
    ]);
}