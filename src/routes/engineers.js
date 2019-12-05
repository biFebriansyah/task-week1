// const middleware = require('../helper/test');
const express = require('express');
const control = require('../controllers/engineers');
const { multerUploads } = require('../helpers/multer');
const { cloudinaryConfig } = require('../configs/cloudinary');
const Engineer = express.Router();

Engineer
    //.use('*', cloudinaryConfig)
    .get('/', control.findBy)
    .get('/username', control.getDataBy)
    .post('/', control.add)
    .put('/engineer/:id', control.update)
    .delete('/engineer/:id', control.destroy)

module.exports = Engineer