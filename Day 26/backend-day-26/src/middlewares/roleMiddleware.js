const restrictedTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            const err = new Error("Forbidden: You do not have permission");
            err.statusCode = 403;
            return next(err);
        }

        next();
    }
}

module.exports = restrictedTo;