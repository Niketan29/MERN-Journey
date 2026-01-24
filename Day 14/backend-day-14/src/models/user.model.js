const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Mininum 3 letter name required"],
        maxlength: [50, "Maximum limit crossed"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase:true,
        trim: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please enter a valid email address",
        ]
    },
    age: {
        type: Number,
        min: [0, "Age can not be less than 0"],
        max: [120, "Age can not be greater than 120"]
    }
}, { timestamps: true });

// userSchema.pre("save", function (next) {

//     if (this.email) {
//         this.email = this.email.toLowerCase();
//     }
//     console.log("User is about to be saved:", this.email);
//     next();
// })

const User = mongoose.model("User", userSchema);
module.exports = User;