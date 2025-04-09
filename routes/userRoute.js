var express=require('express');
var router=express.Router();
var userModel=require('../model/user');

router.post('/',(req,res)=>{
    try {
        userModel(req.body).save();
        res.send("User added")
    } catch (error) {
        res.send(error)
    }
})

// api to login
router.post('/login',async(req,res)=>{
        const user=await userModel.findOne({email:req.body.email})
if(!user){
    return res.send("User Not Found")
}
try {
    if(user.password === req.body.password){
        res.send("Login Successfull")
    }else{
        res.send("Invalid Credentials")
    }
} catch (error) {
    res.send(error)
    
}
})   
module.exports=router