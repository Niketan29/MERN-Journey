const express = require("express");
const router = express.Router();
const { getAllUser, createUser } = require("../controllers/userController.js");


router.get("/users", getAllUser)
router.post("/users", createUser)



module.exports = router;