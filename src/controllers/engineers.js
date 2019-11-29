const modules = require('../models/engineers');
const validate = require('../helpers/validate');
const respon = require('../helpers/respon');
const { uploader } = require('cloudinary');
const { dataUri } = require('../helpers/multer');

const valid = new validate();
const model = new modules();

module.exports = {

    findBy: async (req, res) => {

        // const {error} = valid.validGet(req.query);

        // if (error) {
        //     return respon(res, 400, error.details[0].message);
        // }
        
        let queryName = req.query.name
        let querySkill = req.query.skill
        let queryId = req.query.id
        let orderBy = req.query.orderBy
        let typeSort = req.query.typeSort
        let limit = req.query.limit
        let offset = req.query.offset
    
        try {
            let result = await model.findBy(queryName, querySkill, queryId, orderBy, typeSort, limit, offset)
            return respon(res, 200, result);
        } catch (error) {
            return respon(res, 500, error);
        }
    },

    add: async (req, res) => {

        // if (req.file) {
        //     const file = dataUri(req).content;
        //     const test = await uploader.upload(file,{folder: "hiringapp/company/logo"})

        let data = {
            name: req.body.name,
            dob: new Date().toISOString().slice(0, 19).replace('T', ' '),
            location: req.body.location,
            create_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
            update_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
        };

        try {

            let result = await model.add(data);
            return respon(res, 201, result);
    
        } catch (error) {
            return respon(res, 500, error);
        }
    },

    update: async (req, res) => {

        const {error} = valid.validateEnginer(req.body);

        if (error) {
            return respon(res, 400, error.details[0].message);
        }
    
        let data = {
            name: req.body.name,
            DOB: new Date().toISOString().slice(0, 19).replace('T', ' '),
            location: req.body.location,
            update_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
        };
        let userId = req.params.iduser;
    
        try {
            let result = await model.update(data, userId);
            return respon(res, 201, result);
    
        } catch (error) {
            return respon(res, 500, error);
        }
    },

    destroy: async (res, req) => {

        let idEngineer = req.params.iduser
        try {
            let result = await model.destroy(idEngineer);
            return respon(res, 200, result);
    
        } catch (error) {
            return respon(res, 500, error);
        }
    }
}