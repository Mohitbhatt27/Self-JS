const axios = require('axios');

async function fetch() {
    const response = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=15a4f432');
    console.log(response.data);
}

fetch();
