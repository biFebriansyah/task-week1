const models = require('../models/companies');
const respon = require('../helpers/respon');
const validate = require('../helpers/validate');
const upload = require('../helpers/upload');
const pathFIle = require('path');
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

        if (!req.files) {
            return respon(res, 400, "Photo required");
        }
        let photo = ''

        if (req.files.photo.name) {
            photo = req.files.photo
        } else {
            photo = req.files.photo[0]
        }
        const extension = pathFIle.extname(photo.name)
        const path = process.cwd() + '\\src\\upload\\image\\' + 'Photo-'+ Date.now()  + extension;
        await photo.mv(path)
        const url = await upload(path);


        const data = {
            username: req.body.username,
            name: req.body.name,
            logo: url,
            location: req.body.location,
            telp: req.body.telp,
        };

        try {
            const result = await model.add(data);
            return respon(res, 200, 'Success');

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
    },

    getDataBy: async (req, res) => {

        const user = req.params.username;

        try {
            let result = await model.getDataBy(user);
            return respon(res, 200, result);
    
        } catch (error) {
            return respon(res, 500, error);
        }
    },
}
