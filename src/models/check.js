const conn = require('../configs/conn');
const mysqli = require('mysql');

const cekUsername = (username) => {

    return new Promise( (resolve, reject) => {
        
        conn.query("SELECT * FROM users WHERE username = ?", username, (err, result) =>
        {
            if (err) {
                conn.end();
                reject(err);
            }
            else {
                resolve(result);
                conn.end();
            }
        })
    })
}

module.exports = cekUsername