const conn = require('../configs/conn');


class getLogin {

    getPassword (username) {

        return new Promise( (resolve, reject) => {

            conn.query("SELECT password, role FROM users WHERE username = ?", username, (err, result) =>
            {
                if (err) {
    
                    reject(err)
                }
                else {
                    
                    resolve(result);
                }
            })
        })
    }

    setToken (token, username) {

        return new Promise ((resolve, reject) => {

            conn.query('INSERT INTO users userToken = ? WHERE username = ? ',[token, username], (err, result) => {

                if (err) {
                    reject(err);
                }
                else {
                    resolve(result)
                }
            } )
        })
    }
}

module.exports = getLogin