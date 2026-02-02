const yup = require("yup");

const updateMeSchema = yup
    .object({
        name: yup.string().min(3).max(50),
        email: yup.string().email(),
        age: yup.number().min(0).max(120),
    })
    .test(
        "at-least-one-field",
        "At least one field must be provided",
        (value) => value && Object.keys(value).length > 0
    );

const adminUpdateUserSchema = yup
    .object({
        name: yup.string().min(3).max(50),
        email: yup.string().email(),
        age: yup.number().min(0).max(120),
        role: yup.string().oneOf(["user", "admin"]),
    })
    .test(
        "at-least-one-field",
        "At least one field must be provided",
        (value) => value && Object.keys(value).length > 0
    );


module.exports = { updateMeSchema, adminUpdateUserSchema }