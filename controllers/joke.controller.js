const Joke = require('../models/joke.model');

// test
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.joke_create = function (req, res) {
    let joke = new Joke(
        {
            icon_url: req.body.icon_url,
            url: req.body.url,
            category: req.body.category,
            value: req.body.value,
            favorite: req.body.favorite
        }
    );

    joke.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.send('Joke Created successfully')
    })
};

// find all
exports.joke_find_all = function (req, res) {
    Joke.find(function(err, jokes){
        if (err)
            res.send(err);
        res.send(jokes);
    });
}

// find by id
exports.joke_details = function (req, res) {
    Joke.findById(req.params.id, function (err, joke) {
        if (err) return res.send(err);
        res.send(joke);
    })
};

// update
exports.joke_update = function (req, res) {
    Joke.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, joke) {
        if (err) return res.send(err);
        res.send('Updated successfully!');
    });
};

// delete
exports.joke_delete = function (req, res) {
    Joke.findByIdAndRemove(req.params.id, function (err) {
        if (err) return res.send(err);
        res.send('Deleted successfully!');
    })
};