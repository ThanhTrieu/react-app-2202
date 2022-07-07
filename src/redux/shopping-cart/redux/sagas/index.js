import { call, all } from 'redux-saga/effects';
import { watchGetProductsDataSaga } from './home';

export default function* rootSaga(){
    yield all([
        call(watchGetProductsDataSaga)
    ]);
}