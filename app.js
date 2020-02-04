const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
     direccion: {
          alias: 'd',
          desc: 'Direccion de la ciudad para obtener el clima',
          demand: true
     }
}).argv;

// lugar.getLugarLaLng(argv.direccion)
//      .then(console.log);

clima.getClima(40, -75)
     .then(console.log)
     .catch(console.log)

const getInfo = async (direccion) => {
     try {
          let dir = await lugar.getLugarLaLng(direccion);
          let climate = await clima.getClima(dir.lat, dir.lng);
          return `El clima de ${dir.direccion} es de ${climate}.`;
     } catch (error) {
          return `No se pudo  determinar el clima de ${direccion} `

     }

}

getInfo(argv.direccion)
     .then(console.log)
     .catch(console.log);

