const express = require("express");
const router = express.Router();
const {healthRouter} = require("../controllers/healthController.js")



router.get("/health",healthRouter);


module.exports = router;