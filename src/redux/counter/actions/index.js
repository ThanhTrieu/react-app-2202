import * as typeActions from './type';

// day la noi dinh nghia action
// action - la 1 function luon luon return ve 1 plan object (pure object)
// thong thuong pure object do se co 2 thuoc tinh co ban type (ten cua action) - payload (du lieu can xu ly cua action)

export const decrementCounter = (val) => ({
    type: typeActions.DECREMENT_COUNTER,
    payload: { value: val }
});

export const incrementCounter = val => ({
    type: typeActions.INCREMENT_COUNTER,
    payload: { value: val }
});