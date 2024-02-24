const mongoose = require("mongoose")
const carmodels= mongoose.Schema({
   brandname:{type:String,required:true},
   model:{type:String,required:true},
   price:{type:String,required:true}

})
module.exports=mongoose.model("Car",carmodels)
