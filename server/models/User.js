const db = require('../config/db');

class User {
    static async create(user) {
        const { username, email, password, phone, name } = user;
        const sql = `
            INSERT INTO users (username, email, password, phone, name)
            VALUES (?, ?, ?, ?, ?)
        `;
        return db.execute(sql, [username, email, password, phone, name]);
    }

    static async findByUsername(username) {
        const sql = 'SELECT * FROM users WHERE username = ?';
        const [rows] = await db.execute(sql, [username]);
        return rows[0];
    }

    static async findByEmail(email) {
        const sql = 'SELECT * FROM users WHERE email = ?';
        const [rows] = await db.execute(sql, [email]);
        return rows[0];
    }
}

module.exports = User;
