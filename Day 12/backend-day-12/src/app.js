const express = require("express");
const app = express();
const healthRoutes = require("./routes/healthRoute.js")
const userRoutes = require("./routes/userRoute.js")
const {notFound} = require("./middlewares/notFoundMiddleware.js")
const {errorMiddleware} = require("./middlewares/errorMiddleware.js")


app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api/v1",healthRoutes);
app.use("/api/v1",userRoutes);

app.use(notFound)
app.use(errorMiddleware)

module.exports=app;