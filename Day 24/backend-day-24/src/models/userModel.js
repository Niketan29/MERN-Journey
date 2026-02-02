const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name required"],
        trim: true,
        minlength: [3, "Minimun 3 letter name required"],
        maxlength: [50, "limit crossed"]
    },
    email: {
        type: String,
        required: [true, "Email required"],
        trim: true,
        unique: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please enter a valid email address",
        ],
        lowercase: true
    },
    age: {
        type: Number,
        min: [0, "Age can not be less than 0"],
        max: [120, "Age can not be more than 120"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Minimum 6 characters required"],
        select: false
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });


userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return;
    }

    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model("User", userSchema);
module.exports = User;

