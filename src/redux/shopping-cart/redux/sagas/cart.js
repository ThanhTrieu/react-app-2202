import { call, put, takeLatest } from 'redux-saga/effects';
import { ADD_PRODUCT_TO_CART } from './action';
import { cartAction } from '../reducers/cart/slices';
import { apiShopping } from '../../services/api';


function* addProductCartSaga({id}){
    try {
        yield put(cartAction.loadingAddCart(true));
        const detailPd = yield call(apiShopping.getDataProductById, id);
        if(detailPd !== null){
            // co data tra ve
            yield put(cartAction.addCartSuccess(detailPd));
        } else {
            // khong co data tra ve
            yield put(cartAction.addCartFailure({
                cod: 404,
                message: 'Not found data product'
            }));
        }
    } catch (err) {
        yield put(cartAction.addCartFailure({
            cod: 500,
            message: err
        }));
    } finally {
        yield put(cartAction.loadingAddCart(false));
    }
}

export function* watchAddCartSaga(){
    yield takeLatest(ADD_PRODUCT_TO_CART, addProductCartSaga);
}