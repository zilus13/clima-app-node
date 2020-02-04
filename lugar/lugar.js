const axios = require('axios');

const getLugarLaLng = async (dir) => {

     const encodedUlr = encodeURI(dir);

     const instance = axios.create({
          baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
          headers: { 'x-rapidapi-key': 'c91ad43d4cmsh2f353dbb05d73c7p1b872fjsnb9f42c4e05b0' }
     });

     const resp = await instance.get();
     if (resp.data.Results.length === 0) {
          throw new Error(`No hay resultados para ${dir}`);
     }
     const data = resp.data.Results[0];
     const direccion = data.name;
     const lat = data.lat;
     const lng = data.lon;

     return {
          direccion,
          lat,
          lng
     }
}

module.exports = {
     getLugarLaLng
}