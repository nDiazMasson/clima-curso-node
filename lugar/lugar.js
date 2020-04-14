const axios = require('axios');

const getCoordenates = async(direccion) => {

    const encodedUrl = encodeURI(direccion)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': 'ca55b2ec11mshfc830e6c97edef0p110f82jsn00419ae1d500' }
    });

    const resp = await instance.get();

    let data = resp.data.Results;

    if (data.length === 0) {
        throw new Error(`No hay resultados para la direccion: ${direccion}`)
    } else {
        data = data[0]
        return {
            direccion: data.name,
            lat: data.lat,
            lon: data.lon
        }
    }

}

module.exports = {
    getCoordenates
}