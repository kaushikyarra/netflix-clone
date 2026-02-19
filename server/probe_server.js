const axios = require('axios');

async function probe() {
    const base = 'http://localhost:5000';
    console.log(`Probing ${base}...`);

    try {
        const root = await axios.get(base);
        console.log('Root Status:', root.status);
        console.log('Root Data:', root.data);
    } catch (e) {
        console.error('Root Probe Failed:', e.message);
    }

    try {
        const trending = await axios.get(`${base}/api/movies/trending`);
        console.log('Trending Status:', trending.status);
        console.log('Trending Results:', trending.data.results ? trending.data.results.length : 'No results');
    } catch (e) {
        console.error('Trending Probe Failed:', e.message);
        if (e.response) {
            console.error('Response Status:', e.response.status);
            console.error('Response Data:', e.response.data);
        }
    }
}

probe();
