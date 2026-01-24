const errorMiddleware = (err, req, res, next) => {

    let message = err.message || "Internal server error"
    let statusCode = err.statusCode || 500

    if (err.name === "ValidationError") {
        statusCode = 400;
        message = Object.values(err.errors)
            .map((e) => e.message)
            .join(", ");
    }

    if (err.code === 11000) {
        statusCode = 400
        message = "Email already exists"
    }

    res.status(statusCode).json({
        success: false,
        message,
    })
}

module.exports = { errorMiddleware };