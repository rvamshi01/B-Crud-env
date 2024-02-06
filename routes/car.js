const app= require("express")
const router= app.Router()
const carmodel= require("../models/carmodels")

router.get("/", async(req,res)=>{
    const car= await carmodel.find({})
    res.status(200).json(car)
})

router.post("/",async(req,res)=>{
    const {brandname,model,price}= req.body;
    const car= await carmodel.create({brandname,model,price});
    res.status(201).json(car);
})
router.put("/:id",async(req,res)=>{
    const id= req.params.id;
    const {brandname,model,price}=req.body;
    const car= await carmodel.findByIdAndUpdate(id,{brandname,model,price}, {new:true});
    res.status(201).json(car)
})
router.get("/:id",async(req,res)=>{
    const id= req.params.id
    const car= await carmodel.findById(id)
    res.status(201).json(car)
})
router.delete("/:id",async(req,res)=>{
    const id= req.params.id
    const car= await carmodel.findByIdAndDelete(id)
    res.status(201).json(car)
})
module.exports= router;