const lugar = require('./lugar/lugar')

const forecast = require('./forecast/forecast');

const argv = require('./config/yargs').argv;

/*let getInfo = async(direccion) => {

    try {

        let coord = await lugar.getCoordenates(direccion);
        var temperatura = await forecast.getForecast(coord.lat, coord.lon);
        console.log(temperatura);

    } catch (err) {
        return new Error(err)
    }
    return `La temperatura de ${direccion} es de ${temperatura}ºC`
}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));*/


lugar.getCoordenates(argv.direccion)
    .then(coordenadas => forecast.getForecast(coordenadas.lat, coordenadas.lat, coordenadas.direccion))
    .then(pronostico => console.log(`La temperatura de ${pronostico.direccion}, coordenadas ${pronostico.coordenadas}, es de ${pronostico.temperatura}ºC`))
    .catch(err => console.log(err))