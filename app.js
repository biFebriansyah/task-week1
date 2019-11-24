require('dotenv/config')
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');


const server = express()
const PORT = process.env.PORT
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(morgan('dev'));

const router = require('./src/main')
server.use(router)


server.listen(PORT, () => {
    console.log(`Sever running in port ${PORT}`);
});