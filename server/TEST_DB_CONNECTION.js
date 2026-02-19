const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

console.log('Testing MySQL Connection...');
console.log('Host:', process.env.DB_HOST);
console.log('User:', process.env.DB_USER);
console.log('Database:', process.env.DB_NAME);

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306
};

if (process.env.DB_SSL === 'true') {
    dbConfig.ssl = { rejectUnauthorized: false };
}

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        console.error('❌ CONNECTION FAILED:');
        console.error('Code:', err.code);
        console.error('Message:', err.message);
        if (err.code === 'ER_ACCESS_DENIED_ERROR') {
            console.error('👉 ACTION: Check your DB_PASSWORD in the .env file.');
        } else if (err.code === 'ECONNREFUSED') {
            console.error('👉 ACTION: Ensure MySQL Server is RUNNING.');
        } else if (err.code === 'ER_BAD_DB_ERROR') {
            console.error('👉 ACTION: Create the database "kodnest_movie_db" manually.');
        }
    } else {
        console.log('✅ CONNECTION SUCCESSFUL!');
        console.log('Database is ready to use.');
    }
    connection.end();
});
