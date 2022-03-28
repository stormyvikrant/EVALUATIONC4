const app=require("./index")


app.listen(5050,async function(){
    try{
        await connect()
        console.log("listning port 5050")
    }catch(err){
        console.log(err.message)
    }
})