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

module.exports = { getAllUsersService, loginUserService, createUserService };