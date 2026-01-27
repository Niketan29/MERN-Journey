const express = require("express");
const router = express.Router();
const { getAllUser, createUser, loginUser } = require("../controllers/userController.js");
const protect = require("../middlewares/authMiddleware.js");


router.post("/users", createUser)
router.post("/auth/login", loginUser)

router.get("/users",protect, getAllUser)


module.exports = router;