const express = require('express');
const object = require('../controllers/object.controller');
const router = express.Router();

router.route('/').get(function (req, res) {
    return res.status(200).json({ mesaage: 'Hello World'})
})

router.route('/api/test').get(object.data)

module.exports = router;