const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product');

// a simple test url to check that all of our files are communicating correctly.
router.get('/all', product_controller.get_all);
router.post('/create', product_controller.create);

module.exports = router;