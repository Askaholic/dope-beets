var express = require('express');

var router = express.Router();

var userController = require('../../controllers/users.controller');

router.post('/all', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/:id/bid', userController.makeBid);
router.post('/:id/delbid', userController.delBid);

module.exports = router;
