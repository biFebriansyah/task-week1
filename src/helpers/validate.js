const joi = require('@hapi/joi');
const check = '../models/check.js';

class verifying {

    validateEnginer (reqData) {

        const schema = joi.object({
            
            name: joi.required(),
            dob: joi.required(),
            skill: joi.required(),
            location: joi.required(),
            git_url: joi.required(),
            username: joi.required(),
            description: joi.required(),
            photo: joi.required(),
            create_at: joi.required(),
            update_at: joi.required()
        })
        return schema.validate(reqData);
    }

    validGet (reqData) {

        const schema = joi.object({

            name: joi.string().min(3),
            skill: joi.string(),
            id: joi.number(),
            orderBy: joi.string().required(),
            typeSort: joi.string().required(),
            limit: joi.number(),
            offset: joi.number()
            
        });
    
        return schema.validate(reqData);
    }

    validateCompany (reqData) {

        const schema = joi.object({

            name: joi.string().min(3).required(),
            logo: joi.string(),
            location: joi.string().required(),
            description: joi.string().required()
        });
    
        return schema.validate(reqData);
    }

    validateRegister (reqData) {

        const schema = joi.object({
            username: joi.string().min(3).required(),
            password: joi.string().min(6).required(),
            email: joi.string().email().required(),
            role: joi.required(),
        })
    
        return schema.validate(reqData)
    }

    cekDatalogin (reqData) {

        const schema = joi.object({

            username: joi.string().min(4).required(),
            password: joi.string().required(),
        })
        return schema.validate(reqParams)
    }
}

module.exports = verifying