var userService = require('../services/user.service');

var emptyUser = {
    izhk: 100,
    bids: []
}

function error(res, message, code=400) {
    return res.status(code).json({
        status: 'error',
        message
    });
}

exports.getUser = async function(req, res, next) {
    var id = req.params.id;
    if (!id) {
        return error(res, 'Missing iz');
    }
    if (id.toString().length != 6) {
        return error(res, 'Invalid iz: Must be 6 digits');
    }
    if (!/^\d+$/.test(id)) {
        return error(res, 'Invalid iz: Must be a number');
    }

    var user;
    try {
        user = await userService.getUser(id);
    } catch (e) {
        try {
            var newUser = { ...emptyUser };
            newUser.iz = id;
            user = await userService.createUser(newUser);
        } catch (e) {
            return error(res, e.message);
        }
    }
    return res.status(200).json({
        status: 'success',
        user: {
            iz: user.iz,
            izhk: user.izhk,
            bids: user.bids
        }
    });
}
