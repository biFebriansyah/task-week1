const models = require('../models/companys');
const respon = require('../helpers/respon');
const verifies = require('../helpers/validate');

const model = new models();
const verfy = new verifies();

module.exports = {

    findBy: async (req, res) => {

        try {
            const result = model.findBy();
            return respon(res, 200, result);

        } catch (error) {
            return respon(res, 500, error);
        }
    },

    add: async (req, res) => {

        const {error} = verfy.validateCompany(req.body)
        if (error) {
            return respon(res, 400, error.details[0].message);
        }
        const data = {
            name: req.body.name,
            logo: req.body.logo,
            location: req.body.location,
            description: req.body.description,
        };

        try {
            const result = model.add(data);
            return respon(res, 200, result);
        } catch (error) {
            return respon(res, 500, error);
        }
    },

    update: async (req, res) => {

        const {error} = verfy.validateCompany(req.body)
        if (error) {
            return respon(res, 400, error.details[0].message);
        }
        const data = {
            name: req.body.name,
            logo: req.body.logo,
            location: req.body.location,
            description: req.body.description,
        };
        const idCompany = req.params.iduser

        try {
            const result = model.update(data, idCompany);
            return respon(res, 200, result);
        } catch (error) {
            return respon(res, 500, error);
        }
    },

    destroy: async (res, req) => {

        const idCompany = req.params.iduser
        try {
            const result = model.destroy(idCompany);
            return respon(res, 200, result);
        } catch (error) {
            return respon(res, 500, error);
        }
    }
}
