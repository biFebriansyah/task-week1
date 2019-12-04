// const middleware = require('../helper/test');
const express = require('express');
const control = require('../controllers/test');
const {cloudinaryConfig} = require('../configs/cloudinary');
const Test = express.Router()

Test
    .all('*', cloudinaryConfig)
    .post('/', control)

module.exports = Test