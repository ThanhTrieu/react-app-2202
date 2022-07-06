import React from 'react';
import { Provider } from 'react-redux';
//import configureStore from './store';
import configureStore from './configureStore';
import SearchWeather from './components/Search';
import WeatherData from './components/Weather';

const { store } = configureStore();

const AppWeather = () => {
    return (
        <Provider store={store}>
            <SearchWeather/>
            <WeatherData/>
        </Provider>
    )
}
export default React.memo(AppWeather);