const express = require('express');
const router = express.Router();
const registration_controller = require('../controllers/registration.controller');

// create
router.post('/create', registration_controller.registration_create);

// find all
router.get('/find', registration_controller.registration_find_all);

// find by id
router.get('/:id', registration_controller.registration_details);

// find by email
router.get('/find/email/:email', registration_controller.registration_details_by_email);

// update
router.put('/:id/update', registration_controller.registration_update);

// delete
router.delete('/:id/delete', registration_controller.registration_delete);

module.exports = router;