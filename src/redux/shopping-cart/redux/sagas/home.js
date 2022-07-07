import { call, put, takeEvery } from 'redux-saga/effects';
import { REQUEST_PRODUCTS_DATA } from './action';
import {
    startGetDataProducts,
    stopGetDataProducts,
    getDataProductsSuccess,
    getDataProductsFailure
} from '../reducers/home/slices';
import { apiShopping } from '../../services/api';

function* getProductsDataSaga(){
    try {
        yield put(startGetDataProducts(true));
        const data = yield call(apiShopping.getAllDataProduction);

        if(data){
            yield put(getDataProductsSuccess(data))
        } else {
            yield put(getDataProductsFailure({
                cod: 404,
                message: 'Not found data'
            }))
        }
    } catch (err) {
        yield put(getDataProductsFailure({
            cod: 500,
            message: err
        }))
    } finally {
        yield put(stopGetDataProducts(false));
    }
}

export function* watchGetProductsDataSaga(){
    yield takeEvery(REQUEST_PRODUCTS_DATA, getProductsDataSaga);
}