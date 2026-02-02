const express = require("express");
const router = express.Router();

const { getAllUsers, getMyProfile, createUser, loginUser, updateMe, updateUsersByAdmin, deleteMe, deleteUserByAdmin, logout, changePassword } = require("../controllers/userController.js");
const protect = require("../middlewares/authMiddleware.js");
const restrictedTo = require("../middlewares/roleMiddleware.js")
const validate = require("../validations/validate");
const { registerSchema, loginSchema, changePasswordSchema } = require("../middlewares/validation/authValidation.js")
const { updateMeSchema, adminUpdateUserSchema } = require("../middlewares/validation/userValidation.js")

router.post("/auth/register", validate(registerSchema), createUser);
router.post("/auth/login", validate(loginSchema), loginUser)

router.get("/userProfile", protect, getMyProfile)
router.patch("/userProfile", protect, validate(updateMeSchema), updateMe)
router.patch("/change-password", protect, validate(changePasswordSchema), changePassword);
router.delete("/userProfile", protect, deleteMe)


router.get("/admin/users", protect, restrictedTo("admin"), getAllUsers);
router.patch("/admin/users/:id", protect, restrictedTo("admin"), validate(adminUpdateUserSchema), updateUsersByAdmin)
router.delete("/admin/users/:id", protect, restrictedTo("admin"), deleteUserByAdmin)


router.post("/logout", protect, logout);


module.exports = router;