const express = require("express");
const app = express();
const userRoute = require("./routes/user.route.js");
const { errorMiddleware } = require('./middlewares/error.middleware.js')

app.use(express.json());

app.use("/api/v1", userRoute);



app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});
app.use(errorMiddleware);


module.exports = app;


