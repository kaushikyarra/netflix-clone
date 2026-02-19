const express = require('express');
const router = express.Router();
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.TMDB_API_KEY;

const fetchTmdbMovies = async (endpoint, params = {}) => {
    try {
        if (!API_KEY) throw new Error('TMDB API Key missing');
        console.log(`[DEBUG] Fetching ${endpoint} with Key: ${API_KEY ? 'Yes' : 'No'}`);

        const response = await axios.get(`${TMDB_BASE_URL}${endpoint}`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
                ...params
            }
        });

        return response.data.results || [];
    } catch (error) {
        console.error(`TMDB Fetch Error (${endpoint}):`, error.message);
        if (error.response) console.error('Response Data:', error.response.data);
        return [];
    }
};

// Trending
router.get('/trending', async (req, res) => {
    const results = await fetchTmdbMovies('/trending/movie/week');
    res.json({ results });
});

// Top Rated
router.get('/top-rated', async (req, res) => {
    const results = await fetchTmdbMovies('/movie/top_rated');
    res.json({ results });
});

// Upcoming
router.get('/upcoming', async (req, res) => {
    const results = await fetchTmdbMovies('/movie/upcoming');
    res.json({ results });
});

// Search
router.get('/search', async (req, res) => {
    const { query } = req.query;
    if (!query) return res.status(400).json({ message: 'Query required' });

    const results = await fetchTmdbMovies('/search/movie', { query });
    res.json({ results });
});

module.exports = router;
