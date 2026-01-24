const User = require("../models/user.model.js");

const getAllUser = async (req, res, next) => {

    try {
        const users = await User.find();

        res.status(200).json({
            success: true,
            users
        })

    } catch (err) {
        next(err)
    }

}


const createUser = async (req, res, next) => {

    try {
        const { name, email, age } = req.body;

        if(!name || !email){
            const error = new Error("Name and email shold not be empty")
            error.statusCode = 400
            throw error;
        }

        const user = await User.create({name,email,age});

        res.status(201).json({
            success:true,
            user
        })

    } catch (err) {
        next(err)
    }
}

module.exports={getAllUser,createUser};