import axios from 'axios';

const getDataWeatherByCityName =  async (cityName) => {
    if(cityName === '' || cityName === undefined){
        return {};
    }
    
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=84f0c05e16abc57b03ca8fa00b59f78e&units=metric`;
    const response = await axios.get(urlApi);
    const weather = response.status === 200 ? response.data : {};
    return weather;
}
export const apiWeather = {
    getDataWeatherByCityName
}