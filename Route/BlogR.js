const express = require("express")
const router = express.Router()

const { createBlog, getDiarys } = require("../Handlers/BlogH")

router
    .route("/:id")
    .post(createBlog)
    .get(getDiarys)

module.exports=router