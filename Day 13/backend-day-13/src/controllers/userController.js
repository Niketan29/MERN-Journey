const User = require("../models/userModel.js");

const createUser = async (req, res, next) => {
    try {
        const { name, email, age } = req.body;

        const user = await User.create({ name, email, age });

        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        next(error)
    }
};

const getAllUsers = async (req, res, next) => {

    try {

        const users = await User.find();

        res.status(200).json({
            success:true,
            users
        })

    } catch (error) {
        next(error)
    }
}

module.exports={getAllUsers,createUser};