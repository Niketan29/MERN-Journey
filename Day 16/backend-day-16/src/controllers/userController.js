const User = require("../models/userModule.js");
const jwt = require("jsonwebtoken");


const getAllUser = async (req, res, next) => {
    try {
        const users = await User.find();

        res.status(200).json({
            success: true,
            users
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
            user
        })
    } catch (error) {
        next(error)
    }
}

const loginUser = async (req, res, next) => {

    try {

        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                messsage: "Email and Password are required"
            })
        }

        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or Password"
            })
        }


        const comparePassword = await user.comparePassword(password)

        if (!comparePassword) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or Password"
            })
        }

        const token = jwt.sign({
            id: user._id
        },
            process.env.JWT_SECRET_KEY_TOKEN,
            { expiresIn: process.env.JWT_SECRET_KEY_EXPIRY }
        );

        res.status(200).json({
            success:true,
            message:"Log in successfully",
            token,
            user:{
                name:user.name,
                email:user.email,
                age:user.age
            }
        })

    } catch (error) {
        next(error)
    }
}





module.exports = { getAllUser, createUser, loginUser };    