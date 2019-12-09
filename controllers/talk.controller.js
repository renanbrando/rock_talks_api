const Talk = require('../models/talk.model');
const Registration = require('../models/registration.model');

exports.talk_create = function (req, res) {
    let talk = new Talk(
        {
            category: req.body.category,
            imageUrl: req.body.imageUrl,
            title: req.body.title,
            speaker: req.body.speaker,
            description: req.body.description,
            places: req.body.places,
            date: req.body.date,
        }
    );

    talk.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.send('talk Created successfully')
    })
};

// find all
exports.talk_find_all = function (req, res) {
    Talk.find().populate('category').exec( function(err, talks){
        if (err)
            res.send(err);
        res.send(talks);
    });
}

// find by email
exports.talk_details_by_email = function(req, res) {
    Talk.findById(req.params.id).populate('category').exec(function (err, talk) {
        if (err) return res.send(err);
        Registration.countDocuments({email: req.params.email, talk: req.params.id}, function (err, count){
            console.log(count)
            if (err) return res.send(err);
            res.send({
                ...talk._doc,
                registered: count > 0
            });
        })
        
    })
}

// find by id
exports.talk_details = function (req, res) {
    Talk.findById(req.params.id).populate('category').exec(function (err, talk) {
        if (err) return res.send(err);
        res.send(talk);
    })
};

// update
exports.talk_update = function (req, res) {
    Talk.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, talk) {
        if (err) return res.send(err);
        res.send('Updated successfully!');
    });
};

// delete
exports.talk_delete = function (req, res) {
    Talk.findByIdAndRemove(req.params.id, function (err) {
        if (err) return res.send(err);
        res.send('Deleted successfully!');
    })
};