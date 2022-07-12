import { call, all } from 'redux-saga/effects';
import { watchGetProductsDataSaga } from './home';
import { watchAddCartSaga } from './cart';

export default function* rootSaga(){
    yield all([
        call(watchGetProductsDataSaga),
        call(watchAddCartSaga),
    ]);
}