const upload = require('../helpers/test');
const respon = require('../helpers/respon');
const {uploader} = require('cloudinary').v2;

const testUpload = (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return console.log(err);
        } else {
            uploader.upload(req.file.path, {folder: 'engineer/picture', use_filename: true}, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    return respon(res, 200, result.url);
                }
            })
        }
    })
}

module.exports = testUpload