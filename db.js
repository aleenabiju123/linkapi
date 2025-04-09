var mongoose=require("mongoose");
mongoose.connect("mongodb+srv://aleenapb785:aleena@cluster0.fg24emd.mongodb.net/new?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to DB")
})
.catch((err)=>{
console.log(err)
})