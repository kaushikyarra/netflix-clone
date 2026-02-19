const axios = require('axios');

const API_KEY = '7066a8fb';
const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=Avengers&type=movie`;

console.log('Testing OMDb API...');
console.log('URL:', URL);

axios.get(URL)
    .then(response => {
        console.log('Status:', response.status);
        console.log('Data:', JSON.stringify(response.data, null, 2));
        if (response.data.Response === 'False') {
            console.error('API Error:', response.data.Error);
        } else {
            console.log('✅ API is working! Found', response.data.Search.length, 'movies.');
        }
    })
    .catch(err => {
        console.error('❌ Connection Failed:', err.message);
    });
