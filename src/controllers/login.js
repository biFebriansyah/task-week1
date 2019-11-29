const model = require('../models/login');
const auth = require('../helpers/auth');
const respon = require('../helpers/respon');
const getLogin = new model();
const authentic = new auth();

const Login = async (req, res) => {

    const data = {
        username: req.body.username,
        password: req.body.password
    }

    try {

        const dbData = await getLogin.getPassword(data.username);
        authentic.loginValidate(res, data, dbData);

    } catch (error) {

        return respon(res, 400, error);
    }
}

module.exports = Login