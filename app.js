require('dotenv/config')
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const upload = require('express-fileupload');


const server = express()
const PORT = process.env.PORT
server.use(upload());
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(morgan('dev'));
server.use(cors());
server.use(express.static(__dirname + '/src/upload'));

const router = require('./src/main');
server.use(router);


server.listen(PORT, () => {
    console.log(`Sever running in port ${PORT}`);
});