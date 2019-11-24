require('dotenv/config');
const mysql = require('mysql');

const conn = mysql.createConnection({

    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

conn.connect((err) => {
    if (err) {
        console.log(err);
        return
    }
})

module.exports = conn;