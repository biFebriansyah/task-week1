const express = require('express');
const engineer = require('./routes/engineers');
const company = require('./routes/companies');
const register = require('./routes/register');
const login = require('./routes/login');
const project = require('./routes/project');



const mainRouter = express.Router()

mainRouter.use('/engineer', engineer)
mainRouter.use('/company', company)
mainRouter.use('/register', register)
mainRouter.use('/login', login)
mainRouter.use('/project', project)

module.exports = mainRouter



/**
 * TODO Create jwt Check function
 * 
 * TODO Create Logout Function
 * 
 * TODO Check If username Exsist.!
 * 
 * TODO Seacrh Function
 * 
 * TODO Filter Function
 * 
 * TODO Pagination
 * 
 * TODO git pritier
 * 
 * TODO flowchart
 * 
 * 
 */
