var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todo = new Schema({
    desc: { type: String, required: true },
    date: { type : Date }
}, { strict: false });

module.exports = mongoose.model('todo', todo);