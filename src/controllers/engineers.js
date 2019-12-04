const modules = require('../models/engineers');
const validate = require('../helpers/validate');
const respon = require('../helpers/respon');
const upload = require('../helpers/upload');

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

        let photo = req.files.photo[0]
        const path = process.cwd() + '\\src\\upload\\image\\' + Date.now() + "-" + photo.name;
        photo.mv(path)

        let url = ''
        try {
            let result = await uploader.upload(pathFile, {folder: 'engineer/picture', use_filename: true})
            url = result.url
        } catch (error) {
            return error
        }

        return respon(res, 200, url);

        let data = {
            username: req.body.username,
            name: req.body.name,
            dob: req.body.dob,
            skill: req.body.skill,
            location: req.body.location,
            photo: photo,
            git_url: req.body.git,
            description: req.body.desc,
            create_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
            update_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
        };
        
        model.add(data)
        .then(result => {
            return respon(res, 201, result);
        })
        .catch(err => {
            return respon(res, 400, err)
        })
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
