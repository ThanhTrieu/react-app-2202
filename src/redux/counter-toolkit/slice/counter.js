import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 1 }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: { // reducer
        // action
        increment(state, action) {
            //console.log(action);
            state.value += action.payload;
        }
    }
});

export const { increment } = counterSlice.actions; // lay ra action
export const counterSelector = state => state.counter.value;
export default counterSlice.reducer; // lay ra reducer