const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db');

dotenv.config();

const app = express();

// Middleware
// Middleware
app.use(cors({
    origin: '*', // Allow all origins for Vercel deployment
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/movies', require('./routes/movieRoutes'));

// Test Route
app.get('/', (req, res) => {
    res.send('Kodnest Movie Explorer API is running...');
});

// Database Connection Check & Init
const initDb = async () => {
    try {
        await db.query('SELECT 1');
        console.log('✅ MySQL Database Connected');

        // Auto-create table if missing
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(255) NOT NULL UNIQUE,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                phone VARCHAR(20),
                name VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        await db.query(createTableQuery);
        console.log('✅ Users table verified/created');
    } catch (err) {
        console.error('❌ Database Connection Failed (Check Credentials):', err.message);
    }
};

initDb();

const PORT = process.env.PORT || 5000;

// Only listen if not running in Vercel (Vercel handles the server)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
}

module.exports = app;
