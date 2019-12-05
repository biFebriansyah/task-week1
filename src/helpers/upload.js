const {uploader} = require('cloudinary').v2;

async function upload(pathFile) {

    let url = ''
    try {
        let result = await uploader.upload(pathFile, {folder: 'engineer/picture', use_filename: true})
        url = result.url
    } catch (error) {
        return error
    }
    return url
}

module.exports = upload