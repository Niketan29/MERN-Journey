const User = require("../models/userModel.js");
const generateToken = require("../utils/tokenGeneration.js")


const getAllUser = async (req, res, next) => {
    try {
        const users = await User.find().select("-password");

        res.status(200).json({
            success: true,
            users
        })
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

        const { name, email, age, password } = req.body

        const user = await User.create({ name, email, age, password });

        res.status(201).json({
            success: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                age: user.age,
            }
        })
    } catch (error) {
        next(error)
    }
}

const loginUser = async (req, res, next) => {

    try {

        let token;

        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and Password is required"
            })
        }

        const user = await User.findOne({ email }).select("+password");


        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid Email and Password"
            })
        }

        const checkPassword = await user.comparePassword(password);

        if (!checkPassword) {
            return res.status(400).json({
                success: false,
                message: "Invalid Email and Password"
            })
        }

        token = generateToken(user.id)

        res.status(200).json({
            success: true,
            token,
            user: {
                name: user.name,
                email: user.email,
                age: user.age
            }
        })

    } catch (error) {
        next(error)
    }
}





module.exports = { getAllUser, createUser, loginUser, getMyProfile };    