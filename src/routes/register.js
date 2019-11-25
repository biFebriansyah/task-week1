// const middleware = require('../helper/test');
const express = require('express');
const control = require('../controllers/register');
const Register = express.Router()

Register
    .post('/', control)

module.exports = Register