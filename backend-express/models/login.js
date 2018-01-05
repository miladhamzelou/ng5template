var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var login = new Schema({
    uname: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    status: { type: String, default: 'a' }
}, { strict: false });

module.exports = mongoose.model('login', login);