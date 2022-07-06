import { createSelector } from 'reselect';

const globalWeatherState = state => state.weather;

// lay state tu reducer ra qua reselect
export const getStateLoadingWeather = createSelector(
    globalWeatherState,
    state => state.loading
);
export const getAllDataWeatherFromState = createSelector(
    globalWeatherState,
    state => state.dataWeathers
)
export const getDataMainWeather = createSelector(
    getAllDataWeatherFromState,
    data => {
        if(data.hasOwnProperty('main')){
            return data['main'];
        }
        return {}
    }
)