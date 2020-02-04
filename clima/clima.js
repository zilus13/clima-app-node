const axios = require('axios');

const getClima = async (lat, lng) => {
     const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=10ebcb1e99b836e5e3300e2e29ae923d&units=metric`)
     return resp.data.main.temp;
}

module.exports = {
     getClima
}