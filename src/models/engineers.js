const conn = require('../configs/conn');

class engineer {

    findBy (queryName = '', querySkill = '', queryId = '', orderBy = '', typeSort = '', limit = '', offset = '') {

        return new Promise( (resolve, reject) => {

            conn.query(`SELECT * FROM vengineer WHERE name LIKE '%${queryName}%' AND nameSkill  LIKE '%${querySkill}%' AND id LIKE '%${queryId}%' ORDER BY ${orderBy} ${typeSort}  `, (err, result) =>
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

            conn.query("INSERT INTO engineer SET ?", data, (err, result) =>
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

            const query = "UPDATE engineer SET name = ?, DOB = ?, location = ?, update_at = ? WHERE id= ?"
            conn.query(query, [data.name, data.dob, data.location, data.update_at, iduser], (err, result) =>
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

            conn.query("DELETE FROM engineer WHERE id= ?", iduser, (err, result) =>
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
}

module.exports = engineer;