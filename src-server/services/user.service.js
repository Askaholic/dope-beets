var User = require('../models/user.model');

exports.getUser = async function(id) {
    var user = await User.findOne({iz: id});
    if (!user) {
        throw Exception('Could not find user: ' + id);
    }
    return user;
};

exports.createUser = async function(user) {
    var newUser = new User({
        ...user
    });

    var savedUser = await newUser.save();
    return savedUser;
};

exports.updateUser = async function(user) {
    var id = user.iz;

    var olduser = await User.findOne({iz: id});
    if (!olduser) {
        throw Exception('Could not find user: ' + id);
    }
    Object.assign(olduser, user);

    var savedUser = await newUser.save();
    return savedUser;
}
