const Talk = require('../models/talk.model');

// test
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

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

// find by id
exports.talk_details = function (req, res) {
    Talk.findById(req.params.id, function (err, talk) {
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