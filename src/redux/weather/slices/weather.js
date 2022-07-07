import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    dataWeathers: {},
    error: null
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        startSearchWeather(state, action){
            state.loading = action.payload;
        },
        finishSearchWeather(state, action){
            state.loading = action.payload;
        },
        searchDataWeatherSucceed(state, action){
            state.dataWeathers = action.payload;
            state.error = null;
        },
        searchDataWeatherFailed(state, action){
            state.error = action.payload;
            state.dataWeathers = {};
        }
    }
});
export const {
    startSearchWeather,
    finishSearchWeather,
    searchDataWeatherSucceed,
    searchDataWeatherFailed
} = weatherSlice.actions;
export default weatherSlice.reducer;