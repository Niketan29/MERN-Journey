require("dotenv").config();
const app = require("./app.js");
const port = process.env.PORT || 6000;
const connectDB = require("./config/db.js");


connectDB()
    .then(async ()=>{
        await app.listen(port,()=>{
            console.log(`Server is running on port ${port}`)
        })
    }).catch(err=>console.log(err))