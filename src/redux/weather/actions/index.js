// dinh cac action dc dispatch vao store va dispatch vao middleware saga
import * as typeActions from './types';

// 1 - action dispatch vao middleware saga
export const requestSearchWeather = (city = '') => {
    return {
        type: typeActions.REQUEST_SEARCH_WEATHER,
        payload: { city }
    }
}

// 2 - cac action dc dispatch vao store (saga)