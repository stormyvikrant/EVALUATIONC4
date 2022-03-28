const mongoose=require("mongoose")

module.exports=()=>{
    return mongoose.connect("mongodb+srv://vikki12:vikki12@cluster0.brbuh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}