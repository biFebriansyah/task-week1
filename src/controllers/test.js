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
            photo = result.url;
        })
    })

    let data = {
        username: req.body.username,
        name: req.body.name,
        dob: req.body.dob,
        skill: req.body.skill,
        location: req.body.location,
        photo: photo,
        git_url: req.body.git,
        description: req.body.desc,
        create_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
        update_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
    };
    
    model.add(data)
    .then(result => {
        return respon(res, 201, result);
    })
    .catch(err => {
        return respon(res, 400, err)
    })
}

module.exports = testUpload