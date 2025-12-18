const express = require('express');
const router = express.Router();

const exampleController=require("../controllers/EquipmentController");

router.get('/', exampleController.getAllItems);
router.post('/', exampleController.createItem);
router.put('/:id', exampleController.updateItem);
router.delete('/:id', exampleController.deleteItem);
