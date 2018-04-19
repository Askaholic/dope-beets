var express = require('express');

var router = express.Router();

var veggieController = require('../../controllers/vegetables.controller');

router.get('/all', veggieController.getVegetables);

module.exports = router;
