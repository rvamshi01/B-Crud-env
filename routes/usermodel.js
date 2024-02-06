const app= require("express")
const router= app.Router()


router.get("/",async(req,res)=>{
    const user= await usermodel.find({});
    res.status(200).json(user);
})
router.post("/post",async(req,res)=>{
    const {username,email,password}=req.body
    const user=await usermodel.create({username,email,password});
    res.status(201).json(user)
})
router.put("/:id",async(req,res)=>{
    const id= req.params.id;
    const {username,email,password}=req.body;
    const user= await usermodel.findByIdAndUpdate(id,{username,email,password},{new:true});
    res.status(200).json(user)

})
router.get("/:id",async(req,res)=>{
    const id= req.params.id;
    const user= await usermodel.findById(id);
    res.status(200).json(user)
})
router.delete("/:id",async(req,res)=>{
    const id= req.params.id;
    const user= await usermodel.findByIdAndDelete(id)
    res.status(200).json(user)
})
module.exports=router;