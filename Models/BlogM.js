const mongoose = require ("mongoose")

const blog = mongoose.Schema({
    story:{
        type:String,
        required:true,
        trim:true
    },
    user:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }],
    comment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comments"
    }]
}, {timeStamp:true})

module.exports= mongoose.model("blogs", blog)