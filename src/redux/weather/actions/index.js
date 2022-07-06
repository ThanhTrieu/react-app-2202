// dinh cac action dc dispatch vao store va dispatch vao middleware saga
import * as typeActions from './types';

// 1 - action dispatch vao middleware saga
export const requestSearchWeather = (city = '') => {
    return {
        //type: typeActions.REQUEST_SEARCH_WEATHER,
        type: typeActions.REQUEST_WEATHER,
        payload: { city }
    }
}

// 2 - cac action dc dispatch vao store (saga)
export const startSearchWeather = start => ({
    type: typeActions.START_SEARCH_WEATHER,
    payload: { start }
});
export const finishSearchWeather = finish => ({
    type: typeActions.FINISH_SEARCH_WEATHER,
    payload: { finish }
});
export const searchDataWeatherSucceed = weather => ({
    type: typeActions.SEARCH_WEATHER_SUCCESS,
    payload: { weather }
});
export const searchDataWeatherFailed = error => ({
    type: typeActions.SEARCH_WEATHER_FAIL,
    payload: { error }
})