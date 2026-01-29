const express = require("express");
const router = express.Router();

const { getAllUsers, getMyProfile, createUser, loginUser } = require("../controllers/userController.js");
const protect = require("../middlewares/authMiddleware.js");
const restrictedTo = require("../middlewares/roleMiddleware.js")

router.post("/auth/register", createUser);
router.post("/auth/login", loginUser)

router.get("/admin/users", protect, restrictedTo("admin"), getAllUsers);
router.get("/userProfile", protect, getMyProfile)



module.exports = router;