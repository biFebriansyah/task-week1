const express = require('express');
const engineer = require('./routes/engineers');
const company = require('./routes/companys');
// const register = require('./routes/Register');
// const login = require('./routes/Login');



const mainRouter = express.Router()

mainRouter.use('/engineer', engineer)
mainRouter.use('/company', company)
// mainRouter.use('/register', register)
// mainRouter.use('/login', login)

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
