const models = require('../models/project');
const respon = require('../helpers/respon');

class project {

    async add (req, res) {

        const data = {
            company: req.body.username,
            engineer: req.body.engineer,
            name: req.body.name,
            time: req.body.time,
            salary: req.body.salary,
            description: req.body.description
        };
        return respon(res, 200, data);
        
        try {
            await models.add(data);
            respon(res, 201, 'success');
        } catch (error) {
            respon(res, 500, error)
        }

    }

    async getByCompany (req, res) {

        const username = req.body.username
        try {
            const result = await models.getByCompany(username);
            respon(res, 200, result)

        } catch (error) {
            respon(res, 500, error)
        }
    }

    async getByEngineer (req, res) {

        const username = req.body.username
        try {
            const result = await models.getByEngineer(username);
            respon(res, 200, result)

        } catch (error) {
            respon(res, 500, error)
        }
    }
}

module.exports = new project();