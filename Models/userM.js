const mongoose = require("mongoose")
const validator = require("validator")


const user = mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw Error ("this email is not valid")
            }
        }

    },
    password:{
        type:String,
        required:true,
        trim:true,
    },

    blog:[{
        
        type:mongoose.Schema.Types.ObjectId,
        ref:"blogs"
        
    }]


}, {timeStamp:true})



module.exports=mongoose.model("users", user)