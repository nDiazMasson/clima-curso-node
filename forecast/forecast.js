const axios = require('axios');

const apiKey = 'd4fd5a5a092e13975f62b3016078b3cf'

const getForecast = async(lat, lon, direccion) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);

    return {
        direccion: direccion,
        coordenadas: [lat, lon],
        temperatura: resp.data.main.temp,
    }


}


module.exports = {
    getForecast
}