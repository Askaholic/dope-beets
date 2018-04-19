var User = require('../models/user.model');

exports.getUser = async function(id) {
    try {
        var user = await User.findOne({iz: id});
        if (!user) {
            throw Exception('Could not fine user: ' + id);
        }
        return user;
    }
    catch (e) {
        throw e;
    }
};

exports.createUser = async function(user) {
    var newUser = new User({
        ...user
    });

    try {
        var savedUser = await newUser.save();
        return savedUser;
    } catch (e) {
        console.log(e);
        throw Error('Error creating user!');
    }
};
