import { createReducer } from '@reduxjs/toolkit';
import { increment } from '../actions/counter';

const initialState = { value: 1 };

export const counterReducer = createReducer(initialState, (builder) => {
    // can convert action cua redux toolkit ve string (action ko phai string)
    // builder: doi tuong dai dien cho action se dc reducer tiep nhan xu ly
    // addCase: phuong thuc cua redux toolkit ho tro san
    builder.addCase(increment, (state, action) => {
        // cho phep thay doi truc tiep state ban dau
        // vi ban chat reduxtoolkit co san thu vien immer
        state.value += action.payload;
    });
});