const express = require('express');
const router = express.Router();
const joke_controller = require('../controllers/joke.controller');

// test
router.get('/test', joke_controller.test);

// create
router.post('/create', joke_controller.joke_create);

// find all
router.get('/find', joke_controller.joke_find_all);

// find by id
router.get('/:id', joke_controller.joke_details);

// update
router.put('/:id/update', joke_controller.joke_update);

// delete
router.delete('/:id/delete', joke_controller.joke_delete);

module.exports = router;