import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import RouteApp from './routes/web';
import configStore from './redux/configureStore';

import './app.css';

const { store, persistor } = configStore();

const ShoppingCartApp = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouteApp/>
            </PersistGate>
        </Provider>
    )
}
export default React.memo(ShoppingCartApp);