const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TalkSchema = new Schema({
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    imageUrl: {type: String, required: false},
    title: {type: String, required: true},
    speaker: {type: String, required: true},
    description: {type: String, required: true},
    places: {type: Number, required: true},
    date: {type: Date, required: true}
});


// Export the model
module.exports = mongoose.model('Talk', TalkSchema);