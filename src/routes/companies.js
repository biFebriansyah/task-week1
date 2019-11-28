// const middleware = require('../helper/test');
const express = require('express');
const control = require('../controllers/companies');
const company = express.Router()


company
    .get('/', control.findBy)
    .post('/add', control.add)
    .put('/update/:id', control.update)
    .delete('/remove/:id', control.destroy)

module.exports = company