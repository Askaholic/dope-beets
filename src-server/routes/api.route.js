var express = require('express');

var router = express.Router();
var users = require('./api/users.route');
var veggies = require('./api/vegetables.route');

router.use('/users', users);
router.use('/vegetables', veggies);

module.exports = router;
