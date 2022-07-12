import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import homeReducer from './home/slices';
import cartReducer from './cart/slices';

const configCartPersistReducer = {
    key: 'cart-shopping',
    storage,
    whitelist: ['dataCarts']
}

const rootReducer = combineReducers({
    home: homeReducer,
    cart: persistReducer(configCartPersistReducer, cartReducer),
});
export default rootReducer;