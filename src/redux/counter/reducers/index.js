// gom cac reducer lai nam trong store
// muc dich sau nay tien loi cho viec thao tac voi state trong store

import { combineReducers } from 'redux';
import { counterReducer } from './counter';

const rootReducer = combineReducers({
    // co the dat ten reducer de luu trong store
    counter: counterReducer
});
// sau nay muon lay state trong store thi thong qua counter reducer (mh da dat ten cho reducer)
export default rootReducer; // luu thang nay vao store