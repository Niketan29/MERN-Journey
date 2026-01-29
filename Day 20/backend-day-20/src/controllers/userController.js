const User = require("../models/userModel.js");
const generateToken = require("../utils/tokenGenerate.js")


const getAllUsers = async (req, res, next) => {

    try {

        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const skip = (page - 1) * limit;


        let sort = { createdAt: -1 };

        if (req.query.sort) {
            if (req.query.sort.startsWith("-")) {
                sort = { [req.query.sort.substring(1)]: -1 };
            } else {
                sort = { [req.query.sort]: 1 };
            }
        }


        const excludeFields = ["page", "limit", "sort"];
        const filters = { ...req.query };

        excludeFields.forEach(field => delete filters[field]);

        let filterStr = JSON.stringify(filters);
        filterStr = filterStr.replace(
            /\b(gte|lte)\b/g,
            match => `$${match}`
        )
        const mongoFilters = JSON.parse(filterStr);

        const users = await User.find(mongoFilters).select("-password").sort(sort).skip(skip).limit(limit);

        const total = await User.countDocuments(mongoFilters);

        res.status(200).json({
            success:true,
            meta:{
                page,
                limit,
                total,
            },
            data:users
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
                id:req.user._id,
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