const express = require("express");
const router = express.Router();
const { getAllUser, createUser, loginUser, getMyProfile } = require("../controllers/userController.js");
const protect = require("../middlewares/authMiddleware.js");
const restrictedTo = require("../middlewares/roleMiddleware.js");


router.post("/users", createUser)
router.post("/auth/login", loginUser)

router.get("/admin/users", protect, restrictedTo("admin"), getAllUser)
router.get("/me", protect, getMyProfile)


module.exports = router;