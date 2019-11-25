const conn = require('../configs/conn');

const register = (data) => {

    return new Promise( (resolve, reject) => {

        conn.query(`INSERT INTO users SET ?`, data, (err, result) =>
        {
            if (err) {
                conn.end();
                reject(err);
            }
            else {
                resolve(result);
                conn.end();
            }
        });
    })
}

module.exports = register