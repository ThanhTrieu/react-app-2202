import { combineReducers } from 'redux';
import homeReducer from './home/slices';

const rootReducer = combineReducers({
    home: homeReducer
});
export default rootReducer;