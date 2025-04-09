var express=require("express");
require("./db");
var userRoute=require('./routes/userRoute')
var productRoute=require('./routes/productRoute')
var app=express();




app.use(express.json());
var port=4000;
 
app.use('/api1',productRoute)
app.use('/api',userRoute)
app.listen(port,(req,res)=>{
    console.log(`Server is up and running ${port}`);
})
