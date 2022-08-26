const express = require("express")
const router = express.Router()

const { createComment } = require("../Handlers/CommentH")

router
    .route("/:id/comment")
    .post(createComment)

module.exports = router