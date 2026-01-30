require("dotenv").config();
const app = require("./app.js");
const port = process.env.PORT || 5000;
const connectDB = require("./config/db.js");


connectDB()
    .then(async () => {
        await app.listen(port,()=>{
            console.log(`Server is running at port : ${port}`)
        })
    }).catch(err=>console.log(err))