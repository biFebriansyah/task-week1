const brcypt = require('bcryptjs');


const getHash = (data) => {

    const random = brcypt.genSaltSync(10)
    const hashData = brcypt.hashSync(data, random)
    return hashData
}

module.exports = getHash