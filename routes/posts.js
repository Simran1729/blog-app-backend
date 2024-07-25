const express = require('express');
const router = express.Router();

const {dummy} = require('../controllers/Dummy')

router.get('/dummy', dummy);

module.exports = router;