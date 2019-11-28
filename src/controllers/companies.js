const models = require('../models/companies');
const respon = require('../helpers/respon');
const validate = require('../helpers/validate');

const valid = new validate();
const model = new models();

module.exports = {

    findBy: async (req, res) => {
        try {
            const result = await model.findBy();
            return respon(res, 200, result);

        } catch (error) {
            return respon(res, 500, error);
        }
    },

    add: async (req, res) => {

        const data = {
            name: req.body.name,
            logo: req.body.logo,
            location: req.body.location,
            description: req.body.description,
        };

        const {error} = valid.validateCompany(data);

        if (error) {
            return respon(res, 400, error.details[0].message);
        }

        try {
            const result = await model.add(data);
            return respon(res, 200, result);

        } catch (error) {
            return respon(res, 500, error);
        }
    },

    update: async (req, res) => {

        const data = {
            name: req.body.name,
            logo: req.body.logo,
            location: req.body.location,
            description: req.body.description,
        };

        
        const {error} = valid.validateCompany(data)
        
        if (error) {
            return respon(res, 400, error.details[0].message);
        }

        const idCompany = req.params.iduser

        try {
            const result = await model.update(data, idCompany);
            return respon(res, 200, result);
        } catch (error) {
            return respon(res, 500, error);
        }
    },

    destroy: async (res, req) => {

        const idCompany = req.params.id;
        console.log('masuk');
        try {
            const result = await model.destroy(idCompany);
            return respon(res, 200, result);
        } catch (error) {
            return respon(res, 500, error);
        }
    }
}
