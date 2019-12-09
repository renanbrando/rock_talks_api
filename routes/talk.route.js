const express = require('express');
const router = express.Router();
const talk_controller = require('../controllers/talk.controller');

// create
router.post('/create', talk_controller.talk_create);

// find all
router.get('/find', talk_controller.talk_find_all);

// find with email
router.get('/find/:id/:email', talk_controller.talk_details_by_email);

// find by id
router.get('/:id', talk_controller.talk_details);

// update
router.put('/:id/update', talk_controller.talk_update);

// delete
router.delete('/:id/delete', talk_controller.talk_delete);

module.exports = router;