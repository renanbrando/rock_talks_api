const express = require('express');
const router = express.Router();
const talk_controller = require('../controllers/talk.controller');

// test
router.get('/test', talk_controller.test);

// create
router.post('/create', talk_controller.talk_create);

// find all
router.get('/find', talk_controller.talk_find_all);

// find by id
router.get('/:id', talk_controller.talk_details);

// update
router.put('/:id/update', talk_controller.talk_update);

// delete
router.delete('/:id/delete', talk_controller.talk_delete);

module.exports = router;