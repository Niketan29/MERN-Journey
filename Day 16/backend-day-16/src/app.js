const express = require("express");
const app = express();
const userRoute = require("./routes/userRoute.js")
const notFound = require("./middlewares/notFound.js");
const errorMiddleware = require("./middlewares/errorMiddleware.js")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1", userRoute);

app.use(notFound);
app.use(errorMiddleware);


module.exports = app;