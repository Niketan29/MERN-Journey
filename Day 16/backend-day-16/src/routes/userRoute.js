const express = require("express");
const router = express.Router();
const { getAllUser, createUser, loginUser } = require("../controllers/userController.js");


router.get("/users", getAllUser)
router.post("/users", createUser)
router.post("/auth/login", loginUser)



module.exports = router;