var mongoose = require('mongoose');

var VegetableSchema = new mongoose.Schema({
    name: String
});

const Vegetable = mongoose.model('Vegetable', VegetableSchema);

module.exports = Vegetable;
