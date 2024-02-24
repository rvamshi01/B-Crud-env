const mongoose= require("mongoose")
const connection= async()=>{
    try{
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("connected Database")
    }
    catch(err){
        console.log(err);
    }
}
module.exports= connection
