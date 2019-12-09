const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let JokeSchema = new Schema({
    id: {type: String},
    icon_url: {type: String, required: false},
    url: {type: String, required: false},
    category: {type: String, required: false},
    value: {type: String, required: true},
    favorite: {type: Boolean, required: true, default: false},
});


// Export the model
module.exports = mongoose.model('Joke', JokeSchema);