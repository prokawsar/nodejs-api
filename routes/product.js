const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product');

router.get('/', product_controller.getAll);
router.post('/', product_controller.create);
router.get('/:id', product_controller.getOne);
router.put('/:id', product_controller.put);
router.delete('/:id', product_controller.delete);

module.exports = router;