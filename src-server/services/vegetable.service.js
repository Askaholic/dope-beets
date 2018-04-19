var Vegetable = require('../models/vegetable.model');

exports.getVegetables = async function() {
    try {
        var vegetables = await Vegetable.find();
        if (!vegetables) {
            throw Exception('Could not find vegetables');
        }
        return vegetables;
    }
    catch (e) {
        throw e;
    }
};
