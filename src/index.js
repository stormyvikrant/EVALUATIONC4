const express=require("express")
const connect=require("./configs/db")
const userControler=require("./controllers/user.controller")

const {register,login,generateToken}=require("./controllers/auth.controller")
const ToDo=require("./controllers/todo.controller.js")



const app=express()

app.use(express.json())

app.use("/user",userControler)
app.use("/register",register)
app.use("/login",login)


module.exports=app