var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    id: Number
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
