const User = require("../models/userModel.js");
const generateToken = require("../utils/tokenGenerate.js")
const ApiFeatures = require("../utils/apiFeatures.js")



const getAllUsersService = async (query) => {

    const features = new ApiFeatures(User.find(), query).filter().sort().paginate();

    const user = await features.query;

    return user;
}


const createUserService = async (userData) => {

    const user = await User.create(userData);

    return user;
}


const loginUserService = async (email, password) => {



    if (!email || !password) {
        throw new Error("Email and Password is required")
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        throw new Error("User not found | Invalid email and password")
    }

    const checkPasword = await user.comparePassword(password);

    if (!checkPasword) {
        throw new Error("Invalid Password")
    }

    let token = generateToken(user.id);

    return { user, token }

}


const updateMeService = async (userId, userData) => {

    if (userData.role || userData.password) {
        const err = new Error("You can not update role and password")
        err.statusCode = 400;
        throw err;
    }

    const allowedFields = ["name", "age", "email"];
    const updates = {};

    allowedFields.forEach(field => {
        if (userData[field] !== undefined) {
            updates[field] = userData[field]
        }
    })

    if (Object.keys(updates).length === 0) {
        const err = new Error("No valid fields to update");
        err.statusCode = 400;
        throw err;
    }

    const user = await User.findById(userId);

    if (!user) {
        const err = new Error("User not found...");
        err.statusCode = 400;
        throw err;
    }


    Object.assign(user, updates);
    await user.save();

    return user;

}


const updateUsersByAdminService = async (userId, userData) => {

    const allowedFields = ["name", "email", "age", "role"];
    const updates = {};


    allowedFields.forEach(field => {
        if (userData[field] !== undefined) {
            updates[field] = userData[field];
        }
    })

    if (Object.keys(updates).length === 0) {
        const err = new Error("No valid fields to update");
        err.statusCode = 400;
        throw err;
    }


    if (updates.role && !["user", "admin"].includes(updates.role)) {
        const err = new Error("Invalid role value");
        err.statusCode = 400;
        throw err;
    }

    const user = await User.findByIdAndUpdate(userId, updates, { new: true, runValidators: true });

    if (!user) {
        const err = new Error("User not found");
        err.statusCode = 400;
        throw err;
    }

    return user;
}

module.exports = { getAllUsersService, loginUserService, createUserService, updateMeService, updateUsersByAdminService };