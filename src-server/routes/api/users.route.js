var express = require('express');

var router = express.Router();

var userController = require('../../controllers/users.controller');

router.get('/:id', userController.getUser);
router.post('/:id/bid', userController.makeBid);

module.exports = router;
