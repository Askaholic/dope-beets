var veggieService = require('../services/vegetable.service');

function error(res, message, code=400) {
    return res.status(code).json({
        status: 'error',
        message
    });
}

function vegetableResponse(res, vegetable) {
    return res.status(200).json({
        status: 'success',
        vegetable: {
            name: vegetable.name
        }
    });
}

exports.getVegetables = async function(req, res, next) {
    try {
        var vegetables = await veggieService.getVegetables();
    } catch (e) {
        return error(res, e.message);
    }
    return res.status(200).json({
        status: 'success',
        vegetables
    });
};

exports.makeVegetable = async function(req, res, next) {
    if (!req.body.name) {
        return error(res, 'Missing name');
    }
    if (!req.body.password) {
        return error(res, 'Missing password');
    }

    var name = req.body.name;
    var pass = req.body.password;

    // TODO: refactor
    if (pass !== 'beet') {
        return error(res, 'Incorrect password');
    }

    try {
        var vegetable = await veggieService.getVegetable(name);
        if (vegetable) {
            return error(res, name + ' already exists');
        }
        return error(res, 'Something weird happened');
    } catch (e) {
        var storedVegetable = await veggieService.createVegetable({
            name
        });
        return vegetableResponse(res, storedVegetable);
    }
};

exports.deleteVegetable = async function(req, res, next) {
    if (!req.body.name) {
        return error(res, 'Missing name');
    }
    if (!req.body.password) {
        return error(res, 'Missing password');
    }

    var name = req.body.name;
    var pass = req.body.password;

    // TODO: refactor
    if (pass !== 'beet') {
        return error(res, 'Incorrect password');
    }

    try {
        var vegetable = await veggieService.delVegetable(name);
        return res.status(200).json({status: 'success'});
    } catch (e) {
        return error(res, e.message);
    }
};
