const express = require("express");
const app = express();
const userRoute = require("./routes/userRoute.js");
const {errorMiddleware} = require("./middlewares/errorMiddleware.js")

app.use(express.json());


app.use("/api/v1",userRoute);

app.use(errorMiddleware)


module.exports=app;