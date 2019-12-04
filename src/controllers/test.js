const upload = require('../helpers/test');
const respon = require('../helpers/respon');
const {uploader} = require('cloudinary').v2;

const testUpload = (req, res) => {

    let photo = ''
    upload(req, res, (err) => {
        if (err) {
            return respon(res, 400, err)
        }
        uploader.upload(req.file.path, {folder: 'engineer/picture', use_filename: true}, (err, result) => {
            if (err) {
                return respon(res, 500, err)
            }
            photo = result
        })
    })
}

module.exports = testUpload