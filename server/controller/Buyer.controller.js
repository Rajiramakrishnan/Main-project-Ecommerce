const {BuyerModel}=require("../Model/Buyer.model.js")
const bcrypt=require("bcrypt");
const {genToken}=require("../Utils/generateToken.js");
const {checkPass}=require("../Utils/password.js")
const addBuyer = async (req, res) => {
    try {
      console.log("body", req.body);
      let imgPath=req.file;
      console.log("imgpath",imgPath);
      
      const {
        fullName,
        email,
        password,
        confirmPassword,
        phoneNumber,
        address,
        district,
        state,
        pincode,
        dateOfBirth
     
        
      } = req.body;
      const saltRound = 10;
      console.log(password);
      const hashedPassword = await bcrypt.hash(password, saltRound);
      console.log("hashed password", hashedPassword);
      const buyer = new BuyerModel({
        fullName,
        email,
        password:hashedPassword,
        confirmPassword,
        phoneNumber,
        address,
        district,
        state,
        pincode,
        dateOfBirth,
      
        buyerImg: imgPath.filename
      });
      console.log(buyer);
      
      await buyer.save();
      return res.status(201).json({ message: "Buyer Record created" });
    } catch (error) {
      return res.status(500).json({ message: "server error",error:error.message });
    }
  };
  
const findBuyer=async(req,res)=>{
    try{
      const buyerId=req.params.id;
      console.log(buyerId);
       const buyer=await BuyerModel.findById(buyerId);
       if(!buyer){
        return res.status(404).json({message:"buyer not found"})
       }
      return res.status(200).json({message:"buyer found",data:user})
    }catch(error){
      return res.status(500).json({message:"Server Error",error:error.message})
    }
  }
  const findAllBuyers=async(req,res)=>{
    try{
       const buyers=await BuyerModel.find();
       console.log(buyers);
       
       
      return res.status(200).json({message:"Buyers found",data:users})
    }catch(error){
      return res.status(500).json({message:"Server Error",error:error.message})
    }
  }
  const findandupdate=async(req,res)=>{
    try{
      const buyerId=req.params.id;
      const newPassword=req.body.newPassword;
      console.log(newPassword);
      
      const saltRound=10;
      const hashedNewPassword=await bcrypt.hash(newPassword, saltRound)
      console.log(hashedNewPassword);
      const newEmail=req.body.newEmail;
      console.log(newEmail);
      const newbuyer=await BuyerModel.findByIdAndUpdate(buyerId,{password:hashedNewPassword,email:newEmail},{new:true})
      console.log(newbuyer);
      if(!newbuyer){
        return res.status(404).json({message:"Buyer  not found"})
      }
      else{
        return res. status(200).json({message:"Buyer updated",data:newuser})
      }
      
      
    }
    catch(error){
      return res.status(500).json({message:"server error"})
    }
  }
  const findanddelete=async (req,res)=>{
    try{
      const buyerId=req.params.id;
      const delBuyer=await BuyerModel.findByIdAndDelete(buyerId)
      console.log(delBuyer);
      if(!delBuyer){
        return res.status(404).json({message:"Buyer not deleted"})
      }
      else{
        return res.status(200).json({message:"Buyer deleted",data:delUser})
      }
    }
    catch(error){
      return res.status(500).json({message:"server error",error:error.message})
    }
  }
  const login=async(req,res)=>{
    try{
      const FullName=req.body.fullName;
      const Password=req.body.password;
  
      console.log('body', req.body)
  
      const findBuyer=await BuyerModel.findOne({fullName: FullName})
     
      if(!findBuyer){
         return res.status(404).json({message:"Invalid buyername"})
        }
       const isSame = await checkPass(Password, findBuyer.password)
     if (!isSame) {
          
          return res.status(404).json({message:"user not found"})
      }
  
      const obj = {
        id: findBuyer._id,
        email: findBuyer.email
      }
      const token = genToken(obj)
      console.log(token)
  
      return res.status(200).json({data: findBuyer, token})
    }catch(err) {
      console.log(err);
      
      return res.status(500).json({err, message: "Server error"})
    }
  }
module.exports={addBuyer,findBuyer,findAllBuyers,findandupdate,findanddelete,login}