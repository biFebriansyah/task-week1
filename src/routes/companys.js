// const middleware = require('../helper/test');
const express = require('express');
const control = require('../controllers/companys');
const company = express.Router()


company
    .get('/', control.findBy)
    .post('/', control.add)
    .put('/company/:id', control.update)
    .delete('/company/:id', control.destroy)

module.exports = company