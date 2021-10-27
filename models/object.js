const { buildQuery } = require('../libsData/buildQuery');

const getData = () => {

    let response = null
    try {
        return buildQuery(`SELECT SYSDATE AS NOW FROM dual`)

    } catch (error) {
        console.log(error)
        return response

    }
} 

module.exports = { getData };