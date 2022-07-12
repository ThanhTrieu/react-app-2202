import { createSelector } from 'reselect';

const stateCart = state => state.cart; // truy cap vao reducer lay state

export const getLoadingCart = createSelector(
    stateCart,
    state => state.loadingCart
);

export const getErrorCart = createSelector(
    stateCart,
    state => state.errorCart
);

export const getAllDataCarts = createSelector(
    stateCart,
    data => data.dataCarts
);

// lay tong so luong san pham
export const getTotalItemsCart = createSelector(
    getAllDataCarts,
    items => items.length
);

// tinh tong tien can thanh toan
export const getTotalMoneyCart = createSelector(
    getAllDataCarts,
    data => data.length > 0 ? data.map(item => parseFloat(item['price']) * parseFloat(item['qty'])).reduce((pre, next) => pre + next) : 0
);