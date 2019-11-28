// const middleware = require('../helper/test');
const express = require('express');
const control = require('../controllers/login');
const Login = express.Router()

Login
    .post('/', control)

module.exports = Login