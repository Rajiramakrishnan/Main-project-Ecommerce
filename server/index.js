const express=require("express");
const app=express();
const port=8000;
// const BuyerRouter=require("./Routes/Buyer.Routes.js")
const cors=require("cors");
const connectDB=require("./DB/ConnectDB.js")
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hello world")
})
// app.use("/Ecommerce_api/buyer",BuyerRouter);
connectDB().then(()=>{
    app.listen(port,()=>{
     console.log(`App listening on port ${port}`);
     
    })
     
 })
 .catch((err)=>{
     console.log("err",err);
     
 })