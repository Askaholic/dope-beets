var Vegetable = require('../models/vegetable.model');

exports.getVegetables = async function() {
    var vegetables = await Vegetable.find();
    if (!vegetables) {
        throw Exception('Could not find vegetables');
    }
    return vegetables;
};

exports.getVegetable = async function(name) {
    var vegetable = await Vegetable.findOne({name});
    if (!vegetable) {
        throw Exception('Could not find vegetable: ' + name);
    }
    return vegetable;
};
