const multer = require('multer');
const path = require('path');


const storages = multer.diskStorage({
    destination: './src/public/image',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const multers = multer({
    storage: storages
}).single('photo')

module.exports = multers