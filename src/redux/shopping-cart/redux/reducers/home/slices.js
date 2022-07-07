import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    dataProducts: [],
    errors: null
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        startGetDataProducts(state, action){
            state.loading = action.payload;
        },
        stopGetDataProducts(state, action){
            state.loading = action.payload;
        },
        getDataProductsSuccess(state, action){
            state.dataProducts = action.payload;
            state.errors = null;
        },
        getDataProductsFailure(state, action){
            state.dataProducts = [];
            state.errors = action.payload;
        },
    },
});
export const { startGetDataProducts, stopGetDataProducts, getDataProductsSuccess, getDataProductsFailure } = homeSlice.actions;
export default homeSlice.reducer;