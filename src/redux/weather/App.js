import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
//import configureStore from './store';
import configureStore from './configureStore';
import SearchWeather from './components/Search';
import WeatherData from './components/Weather';

const { store, persistor } = configureStore();

const AppWeather = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <SearchWeather/>
                <WeatherData/>
            </PersistGate>
        </Provider>
    )
}
export default React.memo(AppWeather);