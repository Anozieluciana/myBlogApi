const jwt = require("jsonwebtoken")
const userM = require("../Models/userM")


const auth= async(req,res)=>{
    try{
        const token = req.header("Authorization").replace("Bearer", "")
        const decoded = jwt.verify(token, process.env.MYSECRETKEY)
        const User = await userM.findOne({
            _id:decoded._id,
            "token.token":token      
  })
        if(!User){
            throw new Error()
        }
        req.token = token
        req.User =User
        next()
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

module.export = auth