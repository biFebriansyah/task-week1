const conn = require('../configs/conn');
const mysqli = require('mysql');

// export const cekUsername = (username) => {

//     return new Promise( (resolve, reject) => {
        
//         conn.query("SELECT * FROM users WHERE username = ?", username, (err, result) =>
//         {
//             if (err) {
//                 reject(err);
//             }
//             else {
//                 resolve(result);
//             }
//         })
//     })
// }

// export const cekEmail = (email) => {

//     return new Promise( (resolve, reject) => {
        
//         conn.query("SELECT * FROM users WHERE email = ?", email, (err, result) =>
//         {
//             if (err) {
//                 reject(err);
//             }
//             else {
//                 resolve(result);
//             }
//         })
//     })
// }

class check {

    checkUsername (username) {

        return new Promise( (resolve, reject) => {
        
            conn.query("SELECT * FROM users WHERE username = ?", username, (err, result) =>
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

    checkEmail (email) {

        return new Promise( (resolve, reject) => {
        
            conn.query("SELECT * FROM users WHERE email = ?", email, (err, result) =>
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

module.exports = check