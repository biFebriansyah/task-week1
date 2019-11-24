// const middleware = require('../helper/test');
const express = require('express');
const control = require('../controllers/engineers');
const Engineer = express.Router()

Engineer
    .get('/', control.findBy)
    .post('/', control.add)
    .put('/engineer/:id', control.update)
    .delete('/engineer/:id', control.destroy)

module.exports = Engineer