const userModel = require("../Models/userM")
const blogModel = require("../Models/BlogM")
const  Mongoose  = require("mongoose")


const createBlog = async(req, res)=>{
    try{
        const isUser = await userModel.findById(req.params.id)
        const isBlogger = await new blogModel(req.body)

        isBlogger.user = isUser
        isBlogger.save()

        isUser.blog.push(Mongoose.Types.ObjectId(isBlogger._id))
        isUser.save()

        res.status(200).json({
            message:"diary created",
            data:isBlogger
        })
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
       
    }

}


const getDiarys = async(req,res)=>{
    try{
        const user = await blogModel.find()
        res.status(200).json({
            status:"all diarys",
            data:user
        })
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}



module.exports={
    createBlog,
    getDiarys
}