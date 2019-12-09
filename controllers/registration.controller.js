const Registration = require('../models/registration.model');

exports.registration_create = function (req, res) {
    let registration = new Registration(
        {
            talk: req.body.talk,
            name: req.body.name,
            email: req.body.email,
            company: req.body.company,
            role: req.body.role,
            description: req.body.description,
            date: req.body.date
        }
    );

    registration.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.send('registration Created successfully')
    })
};

// find all
exports.registration_find_all = function (req, res) {
    Registration.find().populate('talk').exec(function(err, registrations){
        if (err)
            res.send(err);
        res.send(registrations);
    });
}

// find by id
exports.registration_details = function (req, res) {
    Registration.findById(req.params.id).populate('talk').exec(function (err, registration) {
        if (err) return res.send(err);
        res.send(registration);
    })
};

// update
exports.registration_update = function (req, res) {
    Registration.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, registration) {
        if (err) return res.send(err);
        res.send('Updated successfully!');
    });
};

// delete
exports.registration_delete = function (req, res) {
    Registration.findByIdAndRemove(req.params.id, function (err) {
        if (err) return res.send(err);
        res.send('Deleted successfully!');
    })
};