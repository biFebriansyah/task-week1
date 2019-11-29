const jwt = require('jsonwebtoken');
const brcypt = require('bcryptjs');
const uid = require('uuid/v4');
const login = require('../models/login')
const respone = require('../helpers/respon');

const setToken = new login()

class auth {

    async loginValidate (res, reqData, dbData) {

        if (dbData.length != 0) {

            const reqPass = reqData.password;
            const dbPass = dbData[0].password;
            const username = reqData.username;
            const role = dbData[0].role;
    
            if (brcypt.compareSync(reqPass, dbPass)) {

                try {
                    const payload = {
                        username: username,
                        uuid: uid()
                    }
        
                    const token = jwt.sign(payload, process.env.KEYS, {expiresIn: '1h'})
                    
                    await setToken.setToken(token, username);
    
                    const result = {
                        token: token,
                        role: role
                    }
        
                    return respone(res, 200, result);
                    
                } catch(error) {
                    return respone(res, 500, error);
                }

            } else {
                return respone(res, 400, 'password wrong!');
            }

        } else {
            return respone(res, 400, 'Check your email');
        }
    }
}

module.exports = auth