import React from 'react';
import { Provider } from 'react-redux';
import RouteApp from './routes/web';
import configStore from './redux/configureStore';

import './app.css';

const { store } = configStore();

const ShoppingCartApp = () => {
    return (
        <Provider store={store}>
            <RouteApp/>
        </Provider>
    )
}
export default React.memo(ShoppingCartApp);