import React from 'react';
import SearchWeather from './components/Search';
import WeatherData from './components/Weather';

const AppWeather = () => {
    return (
        <>
            <SearchWeather/>
            <WeatherData/>
        </>
    )
}
export default React.memo(AppWeather);