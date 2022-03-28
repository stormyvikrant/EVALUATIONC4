const mongoose=require("mongoose")

const bcrypt=require("bcrypt")

const userSchema=new mongoose.Schema({
"firstName": {type:String,requires:true},
"lastName" :{type:String,requires:false},

"email": {type:String,requires:true},
"password":{type:String,requires:true},

},{
    versionKey:false,
    timestamps:true
});

userSchema.methods.checkPassword=function(password){
    return bcrypt.compareSync(password,this.password)
}

module.exports=mongoose.model("user",userSchema)