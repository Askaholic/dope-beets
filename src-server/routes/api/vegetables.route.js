var express = require('express');

var router = express.Router();

var veggieController = require('../../controllers/vegetables.controller');

router.get('/all', veggieController.getVegetables);
router.put('/make', veggieController.makeVegetable);
router.delete('/delete', veggieController.deleteVegetable);

module.exports = router;
