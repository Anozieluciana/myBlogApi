const mongoose = require ("mongoose")

const comment = mongoose.Schema({
    msg:{
        type:String,
        required:true,
        trim:true
    },
    blog:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"blogs"
    }]
}, {timeStamp:true})

module.exports= mongoose.model("commentCollection", comment)