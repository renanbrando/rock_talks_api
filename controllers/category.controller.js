const Category = require('../models/category.model');

exports.category_create = function (req, res) {
    let category = new Category(
        {
            description: req.body.description
        }
    );

    category.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.send('category Created successfully')
    })
};

// find all
exports.category_find_all = function (req, res) {
    Category.find(function(err, categorys){
        if (err)
            res.send(err);
        res.send(categorys);
    });
}

// find by id
exports.category_details = function (req, res) {
    Category.findById(req.params.id, function (err, category) {
        if (err) return res.send(err);
        res.send(category);
    })
};

// update
exports.category_update = function (req, res) {
    Category.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, category) {
        if (err) return res.send(err);
        res.send('Updated successfully!');
    });
};

// delete
exports.category_delete = function (req, res) {
    Category.findByIdAndRemove(req.params.id, function (err) {
        if (err) return res.send(err);
        res.send('Deleted successfully!');
    })
};