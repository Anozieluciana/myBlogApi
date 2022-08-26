const mongoose  = require("mongoose")
const blogModel = require("../Models/BlogM")
const commentModel = require ("../Models/CommentM")

const createComment = async(req, res)=>{
    try{
        const myBlog = await blogModel.findById(req.params.id)
        const myComment = await new commentModel(req.body)

        myComment.blog=myBlog
        myComment.save()

        myBlog.comment.push(mongoose.Types.ObjectId(myComment._id))
        myBlog.save()

        res.status(200).json({
            message:"comment created",
            data:myComment
        })

    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

module.exports={
    createComment
}