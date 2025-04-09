var express=require("express");
var dotenv=require("dotenv");
var userRoute=require('./routes/userRoute')
var productRoute=require('./routes/productRoute')
var app=express();
dotenv.config();
require("./db");
var port=process.env.port;


app.use(express.json());


app.use('/api1',productRoute)
app.use('/api',userRoute)
app.listen(port,(req,res)=>{
    console.log(`Server is up and running ${port}`);
})
