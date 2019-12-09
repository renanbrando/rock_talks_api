const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RegistrationSchema = new Schema({
    _id: Schema.Types.ObjectId,
    talk: [{ type: Schema.Types.ObjectId, ref: 'Talk' }],
    name: {type: String, required: false},
    email: {type: String, required: true},
    company: {type: String, required: true},
    role: {type: String, required: true},
    date: {type: Date, required: true}
});


// Export the model
module.exports = mongoose.model('Registration', RegistrationSchema);