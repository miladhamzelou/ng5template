var mongoose = require('mongoose');

var schema = mongoose.Schema;

var user = new schema({
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String },
    password: { type: String, required: true },
    uname: { type: String, required: true, unique: true, index: true }
});

module.exports = mongoose.model('user', user);