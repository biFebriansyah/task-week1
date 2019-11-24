const joi = require('@hapi/joi');

class verifying {

    validateEnginer (reqData) {

        const schema = joi.object({

            name: joi.string().min(3).required(),
            dob: joi.date().required(),
            location: joi.string().required(),
            
        })
    
        return schema.validate(reqData)
    }

    validateCompany (reqData) {

        const schema = joi.object({
            name: joi.string().min(3).required(),
            logo: joi.link(),
            location: joi.string().required(),
            description: joi.string().min(10),
        })
    
        return schema.validate(reqData)
    }

    validateRegister (reqData) {

        const schema = joi.object({
            username: joi.string().min(3).required(),
            password: joi.string().min(6).required(),
            name: joi.string().required(),
            email: joi.string().email().required(),
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