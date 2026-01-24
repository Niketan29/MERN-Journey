const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected...")
    } catch (error) {
        throw new Error( error.message || "MongoDB Connection failed" )
    }
}

module.exports=connectDB;