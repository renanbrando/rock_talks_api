const express = require('express');
const router = express.Router();
const category_controller = require('../controllers/category.controller');

// create
router.post('/create', category_controller.category_create);

// find all
router.get('/find', category_controller.category_find_all);

// find by id
router.get('/:id', category_controller.category_details);

// update
router.put('/:id/update', category_controller.category_update);

// delete
router.delete('/:id/delete', category_controller.category_delete);

module.exports = router;