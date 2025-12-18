const express = require('express');
const router = express.Router();

const exampleRoutes=require("./EquipmentRoutes")


router.use('/equipment', exampleRoutes);

module.exports = router;