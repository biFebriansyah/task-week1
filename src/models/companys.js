const conn = require('../configs/conn');

class company {

    findBy () {
        return respon(res, 200, 'masuk');
        return new Promise( (resolve, reject) => {

            conn.query("SELECT * FROM company", (err, result) =>
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

    add (data) {
        return new Promise( (resolve, reject) => {

            conn.query("INSERT INTO company SET ?", data, (err, result) =>
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

    update (data, iduser) {
        return new Promise( (resolve, reject) => {

            conn.query("UPDATE company SET ? WHERE id= ?", [data, iduser], (err, result) =>
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

    destroy (iduser) {
        return new Promise( (resolve, reject) => {

            conn.query("DELETE FROM company WHERE id= ?", iduser, (err, result) =>
            {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            })
        })
    }
}

module.exports = company