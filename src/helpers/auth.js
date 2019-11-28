const jwt = require('jsonwebtoken');
const brcypt = require('bcryptjs');
const uid = require('uuid/v4');
const login = require('../models/login')

const setToken = new login()

class auth {

    async loginValidate (reqData, dbData) {

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
        
                    return result
                    
                } catch(error) {
                    return error;
                }

            } else {
                return 'password wrong!'
            }

        } else {
            return 'Check your email'
        }
    }
}

module.exports = auth