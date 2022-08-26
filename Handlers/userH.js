const userModel = require("../Models/userM")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const createUser = async(req,res)=>{
    try{
        const {name, email, password} = req.body
        const salt = await bcrypt.genSalt(8)
        const hashed = await bcrypt.hash(password,salt)
        const thisUser = await userModel.create({
            name,
            email,
            password:hashed
        })
        res.status(200).json({status:"success", data:thisUser})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

const signInUser = async(req,res)=>{
    try{
        const {email, password} = req.body

        const thisUser = await userModel.findOne({email})

        if(thisUser){
            const checkPassword = await bcrypt.compare(password, thisUser.password)

            if(checkPassword){
                const token = jwt.sign({_id: thisUser._id}, process.env.MYSECRETKEY, {
                    expiresIn:process.env.DAYS
                })
                const {password, ...info} = thisUser._doc
                // const data = user._docs

                res.status(200).json({
                    status:"user has successfully signin",
                    data: {token, ...info}
                })
               
            }
            else{
                res.status(404).json({message: "incorect password"})
            }
        }else{
            res.status(404).json({message: "user not found"})
        }
    }
    catch(e){
       res.status(500).json(e)
    }
}

const getAllUsers = async(req,res)=>{
    try{
        const user = await userModel.find()
        res.status(200).json({
			status:"success",
            data:user,
        })
    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const getUser = async(req,res)=>{
    try{
        const user= await userModel.findById(req.params.id)
        res.status(200).json({
            data:user,
            status:"success"
        })
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}


const updateUser = async(req,res)=>{
    try{
        const user = await userModel.findByIdAndUpdate(req.params.id,res.body,{new:true})
        res.status(200).json({
            data:user,
            status:"success"
        })
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

const deleteUser = async(req,res)=>{
    try{
        const user= await userModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            data:user,
            status:"success"
        })
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}


module.exports={
    createUser,
    signInUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}