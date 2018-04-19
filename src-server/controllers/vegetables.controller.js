var veggieService = require('../services/vegetable.service');

function error(res, message, code=400) {
    return res.status(code).json({
        status: 'error',
        message
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
}
