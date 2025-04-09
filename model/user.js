var mongoose=require("mongoose");
var userschema=mongoose.Schema({
    email:String,
    password:String,
    role:{type:String,enum:["admin","user"],default:"user"}
})
var userModel=mongoose.model("user",userschema);
module.exports=userModel;