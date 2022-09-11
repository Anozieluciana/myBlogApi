const express = require("express")
const router = express.Router()
const { createUser, signInUser, getAllUsers, getUser, updateUser, deleteUser } = require("../Handlers/userH")
const Auth = require ("../Handlers/Auth")

router
    .route("/").post(createUser).get(getAllUsers)

router
    .route("/user/login").post(signInUser)

router
    .route("/user:_id")
    .get(Auth,getUser)
    .patch(Auth,updateUser)
    .delete(deleteUser)



module.exports = router