const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RegistrationSchema = new Schema({
    talk: { type: Schema.Types.ObjectId, ref: 'Talk' },
    name: {type: String, required: true},
    email: {type: String, required: true},
    company: {type: String, required: true},
    role: {type: String, required: true},
    date: {type: Date, required: true}
});


// Export the model
module.exports = mongoose.model('Registration', RegistrationSchema);