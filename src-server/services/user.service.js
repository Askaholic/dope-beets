var User = require('../models/user.model');

exports.getUser = async function(id) {
    try {
        var user = await User.findById(id);
        return user;
    }
    catch (e) {
        console.log(e);
    }
}
