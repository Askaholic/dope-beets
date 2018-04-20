var Vegetable = require('../models/vegetable.model');

exports.getVegetables = async function() {
    var vegetables = await Vegetable.find();
    if (!vegetables) {
        throw Error('Could not find vegetables');
    }
    return vegetables;
};

exports.getVegetable = async function(name) {
    var vegetable = await Vegetable.findOne({name});
    if (!vegetable) {
        throw Error('Could not find vegetable: ' + name);
    }
    return vegetable;
};

exports.createVegetable = async function(veg) {
    var newVeg = new Vegetable({
        ...veg
    });

    var savedVeg = await newVeg.save();
    return savedVeg;
}
