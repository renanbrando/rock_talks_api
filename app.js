
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const category = require('./routes/category.route'); 
const talk = require('./routes/talk.route'); 
const app = express();

// Set up mongoose connection
let dev_db_url = 'mongodb://renanbrando:rocktalks2019@ds353378.mlab.com:53378/rock_talks';
let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/category', category);
app.use('/talk', talk);

let port = 4000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
})