var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    iz: String,
    izhk: Number,
    bids: [{
        item: String,
        amount: Number
    }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
