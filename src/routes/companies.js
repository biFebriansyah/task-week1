// const middleware = require('../helper/test');
const express = require('express');
const control = require('../controllers/companies');
const company = express.Router()
const { cloudinaryConfig } = require('../configs/cloudinary');

company
    .use('*', cloudinaryConfig)
    .get('/', control.findBy)
    .get('/:username', control.getDataBy)
    .post('/', control.add)
    .post('/project/add', control.add)
    .put('/update/:id', control.update)
    .delete('/remove/:id', control.destroy)

module.exports = company