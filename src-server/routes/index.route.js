var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.status(200).json({status: 'success', version: '0.0'});
});

module.exports = router;
