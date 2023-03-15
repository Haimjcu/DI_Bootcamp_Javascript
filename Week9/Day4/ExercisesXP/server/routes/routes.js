const express = require('express');
const {_pictures} = require('../controllers/controllers.js');

const router = express.Router();

router.get('/api/:category',_pictures);

module.exports = router
