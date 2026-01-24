require('dotenv').config();
const app = require("./app.js");
const connectDB = require("./config/db.js");
const port = process.env.PORT || 5000

connectDB()
    .then(async () => {
        await app.listen(port, () => {
            console.log(`Server is running at port : ${port}`)
        })
    })
    .catch(error =>console.log(error))