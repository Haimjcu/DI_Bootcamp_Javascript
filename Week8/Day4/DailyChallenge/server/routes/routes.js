const express = require('express');
const {_hello, _world} = require('../controllers/controllers.js');


const router = express.Router();

router.get('/api/hello',_hello);
router.post('/api/world',_world);

module.exports = router
