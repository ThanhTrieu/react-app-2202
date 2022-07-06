import { call, put, takeLatest } from 'redux-saga/effects';
//import * as actions from '../actions/index';
import {
    startSearchWeather,
    finishSearchWeather,
    searchDataWeatherSucceed,
    searchDataWeatherFailed
} from '../slices/weather';
import { REQUEST_WEATHER } from '../actions/types';
import { apiWeather } from '../services/api';

// worker saga
// generator function bat buoc de dung cho redux saga
function* weatherSaga(action){
    try {
        // nhan action tu phia user hay he thong truyen vao
        const cityName = action.payload.city || ''; // lay gia tri tu action
        // dispatch action start get data weather vao store
        //yield put(actions.startSearchWeather(true)); // cap nhat state loading
        yield put(startSearchWeather(true));
        // call data from api
        const result = yield call(apiWeather.getDataWeatherByCityName, cityName);
        if(result.hasOwnProperty('cod') && result['cod'] === 200){
            // api call data thanh cong
            //yield put(actions.searchDataWeatherSucceed(result));
            yield put(searchDataWeatherSucceed(result));
        } else {
            // call data ko thanh cong
            // yield put(actions.searchDataWeatherFailed({
            //     cod: 404,
            //     message: 'city not found'
            // }))
            yield put(searchDataWeatherFailed({
                cod: 404,
                message: 'city not found'
            }))
        }
    } catch (err) {
        // yield put(actions.searchDataWeatherFailed({
        //     cod: 500,
        //     message: err
        // }))
        yield put(searchDataWeatherFailed({
            cod: 500,
            message: err
        }))
    } finally {
        yield put(finishSearchWeather(false));
        //yield put(actions.finishSearchWeather(false)); // state lading
    }
}

// watcher saga
export function* watchWeatherSaga(){
    // takeLatest: thuc thi và trả lại kết quả của của actions cuối cùng.
    yield takeLatest(REQUEST_WEATHER, weatherSaga);
}