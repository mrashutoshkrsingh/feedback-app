const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send({text:'hi'});
})

app.listen(process.env.PORT,process.env.IP)