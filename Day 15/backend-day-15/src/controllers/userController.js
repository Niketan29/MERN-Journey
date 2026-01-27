const User = require("../models/userModule.js");



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


module.exports = { getAllUser, createUser };    