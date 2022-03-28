const express=require("express");


const Todo=require("../models/todo.model")

const router=express.Router();

router.post("/",async(req,res=>{
    try{
        const todo=await Todo.create(req.body)
   

        return res.status(201).send(todo)
    }catch(err){
        console.log(err.message)
    }
}))

router.get("/id",async(req,res=>{
    try{
        const todo=await Todo.findById().lean.exce()
      
        return res.status(201).send(todo)
    }catch(err){
        console.log(err.message)
    }
}))