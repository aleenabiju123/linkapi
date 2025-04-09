var mongoose=require("mongoose");
var productschema=mongoose.Schema({
   pname:String,
    pQuantity:String,
    pPrice:Number,
    pBrand:String,
    role:{type:String,enum:["admin","product"],default:"product"}
})
var pModel=mongoose.model("product",productschema);
module.exports=pModel;