const express = require("express");
const router = express.Router();

const { getAllUsers, getMyProfile, createUser, loginUser, updateMe, updateUsersByAdmin } = require("../controllers/userController.js");
const protect = require("../middlewares/authMiddleware.js");
const restrictedTo = require("../middlewares/roleMiddleware.js")

router.post("/auth/register", createUser);
router.post("/auth/login", loginUser)

router.get("/userProfile", protect, getMyProfile)
router.patch("/userProfile", protect, updateMe)


router.get("/admin/users", protect, restrictedTo("admin"), getAllUsers);
router.patch("/admin/users/:id", protect, restrictedTo("admin"), updateUsersByAdmin)

module.exports = router;