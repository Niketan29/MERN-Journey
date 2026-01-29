const User = require("../models/userModel");
const jwt = require("jsonwebtoken")

const protect = async (req,res,next)=>{
    try {
        
        let token;

        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
            token = req.headers.authorization.split(" ")[1];
        }

        if(!token){
            const err = new Error("Not Authorized | Missing Token")
            err.statusCode = 401;
            throw err;
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY_TOKEN);

        const user = await User.findById(decoded.id);

        if(!user){
            const err = new Error("Not Authorized | User not found")
            err.statusCode = 401;
            throw err;
        }

        req.user = user;
        next();


    } catch (error) {
        error.statusCode = error.statusCode || 401;
        next(error);
    }
}

module.exports = protect;