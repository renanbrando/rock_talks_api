const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CategorySchema = new Schema({
    description: {type: String, required: true}
});


// Export the model
module.exports = mongoose.model('Category', CategorySchema);