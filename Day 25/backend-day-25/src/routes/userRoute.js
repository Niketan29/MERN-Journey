const express = require("express");
const router = express.Router();

const { getAllUsers, getMyProfile, createUser, loginUser, updateMe, updateUsersByAdmin, deleteMe, deleteUserByAdmin, logout, changePassword } = require("../controllers/userController.js");
const protect = require("../middlewares/authMiddleware.js");
const restrictedTo = require("../middlewares/roleMiddleware.js")

router.post("/auth/register", createUser);
router.post("/auth/login", loginUser)

router.get("/userProfile", protect, getMyProfile)
router.patch("/userProfile", protect, updateMe)
router.patch("/change-password", protect, changePassword);
router.delete("/userProfile", protect, deleteMe)


router.get("/admin/users", protect, restrictedTo("admin"), getAllUsers);
router.patch("/admin/users/:id", protect, restrictedTo("admin"), updateUsersByAdmin)
router.delete("/admin/users/:id", protect, restrictedTo("admin"), deleteUserByAdmin)


router.post("/logout", protect, logout);


module.exports = router;