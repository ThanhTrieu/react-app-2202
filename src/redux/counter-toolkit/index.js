import React from 'react';
import { Provider } from 'react-redux';
import CounterToolkit from './pages/Counter';
import store from './store';

const AppCounter = () => {
    return (
        <Provider store={store}>
            <CounterToolkit/>
        </Provider>
    )
}
export default React.memo(AppCounter);