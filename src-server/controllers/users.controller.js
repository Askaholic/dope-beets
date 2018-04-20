var userService = require('../services/user.service');
var veggieService = require('../services/vegetable.service');

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

function userResponse(res, user) {
    return res.status(200).json({
        status: 'success',
        user: {
            iz: user.iz,
            izhk: user.izhk,
            bids: user.bids
        }
    });
};

function strIsNum(str) {
    return /^\d+$/.test(str);
}

function validateIz(id) {
    if (!id) {
        throw Error('Missing iz');
    }
    if (id.toString().length != 6) {
        throw Error('Invalid iz: Must be 6 digits');
    }
    if (!strIsNum(id)) {
        throw Error('Invalid iz: Must be a number');
    }
}

async function getOrMakeUser(id) {
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
    return user;
}


exports.getUser = async function(req, res, next) {
    var id = req.params.id;
    try {
        validateIz(id);
    } catch (e) {
        return error(res, e.message);
    }

    var user = await getOrMakeUser(id);
    return userResponse(res, user);
}

exports.makeBid = async function(req, res, next) {
    var id = req.params.id;
    try {
        validateIz(id);
    } catch (e) {
        return error(res, e.message);
    }

    if (!req.body.vegetable) {
        return error(res, 'Missing vegetable');
    }
    if (!req.body.amount) {
        return error(res, 'Missing amount');
    }

    var veg = req.body.vegetable;
    var amt = req.body.amount;

    var user;
    try {
        user = await userService.getUser(id);
        if (user.izhk < amt) {
            return error(res, 'Not enough izhk');
        }
        try {
            var veg = await veggieService.getVegetable(veg);
        } catch (e) {
            return error(res, 'Vegetable not found');
        }

        user.bids.push({
            item: veg.name,
            amount: amt
        });
        user.izhk -= amt;
        user = await userService.updateUser(user);
    } catch (e) {
        return error(res, e.message);
    }
    return userResponse(res, user);
}

exports.delBid = async function(req, res, next) {
    var id = req.params.id;
    try {
        validateIz(id);
    } catch (e) {
        return error(res, e.message);
    }

    if (req.body.bid === undefined) {
        return error(res, 'Missing bid');
    }
    if (!strIsNum(req.body.bid)) {
        return error(res, 'Bid does not exist');
    }

    var bid = req.body.bid;

    var user;
    try {
        user = await userService.getUser(id);
        if (user.bids.length <= bid) {
            return error(res, 'Bid does not exist');
        }
        var removed = user.bids.splice(parseInt(bid, 10), 1);
        user.izhk += removed[0].amount;
        user = await userService.updateUser(user);
    } catch (e) {
        return error(res, e.message);
    }
    return userResponse(res, user);
}
