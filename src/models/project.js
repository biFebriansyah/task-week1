const conn = require('../configs/conn');

class project {

    add (data) {
        return new Promise( (resolve, reject) => {

            let query = "INSERT INTO project SET company = ?, engineer = ?, name = ?, time = ?, salary = ?, description = ?"
            conn.query(query, [data.company, data.engineer, data.name, data.time, data.salary, data.description], (err, result) =>
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

    getByCompany (userCompany) {
        return new Promise( (resolve, reject) => {

            conn.query("SELECT * FROM project WHERE company = ?", userCompany, (err, result) => {
                
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            })
        })
    }

    getByEngineer (userEngineer) {
        return new Promise( (resolve, reject) => {

            conn.query("SELECT * FROM project WHERE engineer = ?", userEngineer, (err, result) => {
                
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

module.exports = new project();