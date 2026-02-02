const yup = require("yup");


const registerSchema = yup.object({
    name: yup.string().min(3).max(50).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required,
    age: yup.number().min(0).max(120).optional(),
});

const loginSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const changePasswordSchema = yup.object({
    currentPassword: yup.string().required(),
    newPassword: yup.string().min(6).required(),
});


module.exports = { registerSchema, loginSchema, changePasswordSchema }