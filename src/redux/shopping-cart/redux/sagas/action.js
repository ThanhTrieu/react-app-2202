// noi dinh nghia cac action dc dispatch vao  middleware saga

export const REQUEST_PRODUCTS_DATA = 'REQUEST_PRODUCTS_DATA';
export const requestGetProductsData = () => ({
    type: REQUEST_PRODUCTS_DATA
});

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const addProductToCart = (id) => ({
    type: ADD_PRODUCT_TO_CART,
    id
});