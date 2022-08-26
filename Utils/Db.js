const mongoose = require("mongoose")
require("dotenv").config();
const url = process.env.DB

mongoose.connect(url).then(()=>{
    console.log("connected to database")
}).catch((error)=>{
    console.log(error.message)
})

module.exports = mongoose