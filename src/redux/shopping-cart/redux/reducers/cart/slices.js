import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loadingCart: null,
    dataCarts: [],
    errorCart: {}
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        loadingAddCart(state, action){
            state.loadingCart = action.payload;
        },
        changeQuantityItemCart(state, action){
            const { id, qty } =  action.payload || { id: 0, qty: 0};
            const newData = state.dataCarts.map(item => {
                return item.id === id ? {...item, qty: qty } : item;
            });
            if(newData !== undefined){
                state.dataCarts = newData;
                state.errorCart = null;
            } else {
                state.errorCart = {
                    cod: 500,
                    message: 'Invalid change quantity item'
                }
            }
        },
        deleteItemCart(state, action){
            const id = action.payload;
            // xoa bo san pham co id nam trong gio hang
            const itemCarts = state.dataCarts.filter(item => item.id !== id);
            if(itemCarts !== undefined){
                state.dataCarts = itemCarts;
                state.errorCart = null;
            } else {
                state.errorCart = {
                    cod: 500,
                    message: 'Invalid delete item'
                }
            }
        },
        addCartSuccess(state, action){
            const detailPd = action.payload;
            const idProduct = detailPd['id'] || 0;
            // kiem tra san pham can them moi vao gio hang da co trong gio hang chua?
            // neu da co => khong them moi ma chi cap nhat so luong mua
            // neu chua co => them moi luon san pham do vao gio hang
            // gio hang : state.dataCarts // array chua cac san pham
            const findPd = state.dataCarts.find(item => item.id === idProduct);
            if(findPd !== undefined){
                // san pham them moi da co trong gio hang roi
                // khong them moi san pham ma chi cap lai so luong mua
                findPd['qty'] += 1; // tu dong them mot
            } else {
                // san pham them moi chua co trong gio hang
                // them moi luon vao gio hang
                // can bo sung them key(truong) so luong mua(qty) vao trong data gio hang
                detailPd['qty'] = 1; // mac dinh mua 1 san pham
                state.dataCarts.push(detailPd); // vi dung reduxtoolkit nen dung push cho array dc
            }
            state.errorCart = null;
        },
        addCartFailure(state, action){
            state.errorCart = action.payload;
            state.dataCarts = [];
        }
    }
});
export const cartAction = cartSlice.actions;
export default cartSlice.reducer;