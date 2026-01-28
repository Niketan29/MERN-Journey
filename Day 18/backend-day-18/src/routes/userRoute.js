const express = require("express");
const router = express.Router();
const { getAllUser, createUser, loginUser } = require("../controllers/userController.js");
const protect = require("../middlewares/authMiddleware.js");
const restrictedTo = require("../middlewares/roleMiddleware.js");


router.post("/users", createUser)
router.post("/auth/login", loginUser)

router.get("/admin/users",protect, restrictedTo("admin"),getAllUser)


module.exports = router;