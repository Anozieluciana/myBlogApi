const bcrypt = require("bcrypt")

module.exports.bcryptHash =async(password)=>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password,salt)
}

module.exports.bycrptCompare = async(password, hashPassword)=>{
    return bcrypt.compare(password, hashPassword)
}