import * as typeActions from '../actions/types';

const initDefaultState = {
    loading: false,
    dataWeathers: {},
    error: null
}

export const weatherReducer = (state = initDefaultState, action) => {
    switch(action.type) {
        case typeActions.START_SEARCH_WEATHER:
            return {
                ...state,
                loading: action.payload.start
            }
        case typeActions.FINISH_SEARCH_WEATHER:
            return {
                ...state,
                loading: action.payload.finish
            }
        case typeActions.SEARCH_WEATHER_SUCCESS:
            return {
                ...state,
                dataWeathers: action.payload.weather,
                error: null
            }
        case typeActions.SEARCH_WEATHER_FAIL:
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state;
    }
}