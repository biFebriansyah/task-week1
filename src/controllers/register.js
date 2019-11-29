const getHash = require('../helpers/hash');
const respon = require('../helpers/respon');
const model = require('../models/register');
const validation = require('../helpers/validate');
const moment = require('moment');
const check = require('../models/check');

const valid = new validation();
const checkUser = new check();

const regis = async (req, res) => {

    const {error} = valid.validateRegister(req.body);

    if (error) {
        return respon(res, 400, error.details[0].message);
    }

    const passwordHash = getHash(req.body.password);

    const data = {
        username: req.body.username,
        password: passwordHash,
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        create_at: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
        updae_at: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    }

    try {
        const cekUsername = await checkUser.checkUsername(data.username);
        const cekEmail = await checkUser.checkEmail(data.email)
        if (cekUsername == '') {

            if (cekEmail == '') {

                const pushData = await model(data);
                if (pushData.affectedRows) {
                    return respon(res, 200, "success");
    
                } else { return respon(res, 400, "failed"); }
                
            } else {
                return respon(res, 400, 'Email alredy used');
            }

        } else {
            return respon(res, 400, 'username alredy used');
        }
        
    } catch (error) {
        return respon(res, 500, error);
    }
}

module.exports = regis