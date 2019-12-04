const express = require('express');
const control = require('../controllers/project');
const Project = express.Router()

Project
    .get('/company', control.getByCompany)
    .get('/engineer', control.getByEngineer)
    .post('/', control.add)

module.exports = Project