const User = require("../models/userModel.js");
const generateToken = require("../utils/tokenGenerate.js")
const ApiFeatures = require("../utils/apiFeatures.js")


const getAllUsers = async (req, res, next) => {

    try {

        const features = new ApiFeatures(User.find(), req.query)
            .filter()
            .sort()
            .paginate();

        const users = await features.query;

        res.status(200).json({
            status: "success",
            results: users.length,
            data: users
        });

    } catch (error) {
        next(error)
    }

}


const getMyProfile = async (req, res, next) => {
    try {

        res.status(200).json({
            success: true,
            user: {
                id: req.user._id,
                name: req.user.name,
                email: req.user.email,
                age: req.user.age,
                role: req.user.role
            }
        })


    } catch (error) {
        next(error)
    }
}


const createUser = async (req, res, next) => {
    try {

        const { name, email, password, age } = req.body;

        const user = await User.create({ name, email, password, age });

        res.status(201).json({
            success: true,
            user: {
                name: user.name,
                email: user.email,
                age: user.age,
                role: user.role
            }
        })

    } catch (error) {
        next(error)
    }
}


const loginUser = async (req, res, next) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(401).json({
                success: false,
                message: "Email and Password is required"
            })
        }

        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found | Invalid email and password"
            })
        }

        const checkPasword = await user.comparePassword(password);

        if (!checkPasword) {
            return res.status(401).json({
                success: false,
                message: "Invalid Password"
            })
        }

        let token = generateToken(user.id);

        res.status(200).json({
            success: true,
            token,
            user: {
                name: user.name,
                email: user.email,
                age: user.age,
                role: user.role
            }
        })

    } catch (error) {
        next(error)
    }
}


module.exports = { getAllUsers, getMyProfile, createUser, loginUser }