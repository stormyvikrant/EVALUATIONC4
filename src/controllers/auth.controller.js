const User=require("../models/user.model")
const jwt=require("jsonwebtoken")

const generateToken=(user)=>{
    return jwt.sign({user},process.env.SECRET_KEY)
}

const register=async(req,res)=>{
    try{
        let user=await User.findOne({email:req.body.email})

        if(user){
            return res.status(400).send({message:"Email is already exist"})
        }

        user= await user.create(req.body)

        const token =generateToken(user)
        return res.status(200).send({user,token})
    }catch(err){
res.status(400).send({message:err.message})
    }
}


// login

const login=async(req,res)=>{
    try{

        const user= await User.findOne({email:req.body.email})

        if(!user){
            return res.status(400).send({message:"Email is wrong"})
        }
const match =user.checkPassword(req.body.password)
    
if(!match){
   
    return res.status(400).send({message:"password is wrong"})
     
}
const token =generateToken(user)
return res.status(200).send({user,token})
    }catch(err){
        res.status(400).send({message:err.message})
    }
}

module.exports={register,login,generateToken}