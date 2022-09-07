require("./Utils/Db")
const express = require ("express")
const port = process.env.PORT

const userRoute = require("./Route/userR")
const blogRoute = require("./Route/BlogR")
const commentRoute = require("./Route/CommentR")
const errorHandler = require("./ErrorGuide/ErrorHandler")


const app = express()

app.use(express.json())
app.get("/", (req, res) => {
	res.status(200).json({ message: "This is best place to be" });
});


app.use(errorHandler);
app.use("/api", userRoute)
app.use("/api", blogRoute)
app.use("/api", commentRoute)



app.listen(port, ()=>{
    console.log("listening to port", port)
})