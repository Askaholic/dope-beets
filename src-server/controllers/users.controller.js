var userService = require('../services/user.service');

exports.getUser = async function(req, res, next) {
    var id = req.params.id;
    if (!id) {
        return res.status(400).json({status: 'error', message: 'Missing id'});
    }

    try {
        var user = await userService.getUser(id)
        return res.status(200).json({status: 'success', user});
    } catch (e) {
        return res.status(400).json({status: 'error', message: e.message});
    }
}
