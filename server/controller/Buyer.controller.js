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
      return res.status(200).json({message:"buyer found",data:buyer})
    }catch(error){
      return res.status(500).json({message:"Server Error",error:error.message})
    }
  }
  const findAllBuyers=async(req,res)=>{
    try{
       const buyers=await BuyerModel.find();
       console.log(buyers);
       
       
      return res.status(200).json({message:"Buyers found",data:buyers})
    }catch(error){
      return res.status(500).json({message:"Server Error",error:error.message})
    }
  }
  const findandupdate=async(req,res)=>{
    try{
      console.log("body", req.body);
     
      
      let imgPath=req.file;
      console.log("imgpath",imgPath);
      const buyerId=req.params.id;
      console.log(buyerId);
      
      const newPassword=req.body.password;
      console.log("new password:",newPassword);
      
      const saltRound=10;
      const hashedNewPassword=await bcrypt.hash(newPassword, saltRound)
      console.log(hashedNewPassword);
      const newEmail=req.body.email;
  
      const newFullName=req.body.fullName;

      const newPhoneNumber=req.body.phoneNumber;
      
      const newState=req.body.state;

      const newDistrict=req.body.district;

      const newDateOfBirth=req.body.dateOfBirth;
 
      const newAddress=req.body.address;
 
      const newPincode=req.body.pincode;
      const newconfirmpassword=req.body.confirmPassword;
      









      const newbuyer=await BuyerModel.findByIdAndUpdate(buyerId,{email:newEmail},{fullName:newFullName},{phoneNumber:newPhoneNumber},{address:newAddress},{pincode:newPincode},{state:newState},{district:newDistrict},{password:newPassword},{confirmPassword:newconfirmpassword},{dateOfBirth:newDateOfBirth},{buyerImg:imgPath.filename},{new:true})
      console.log(newbuyer);
      if(!newbuyer){
        return res.status(404).json({message:"Buyer  not found"})
      }
      else{
        return res. status(200).json({message:"Buyer updated",data:newbuyer})
      }
      
      
    }
    catch(error){
      return res.status(500).json({message:"server error",error:error.message})
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
        return res.status(200).json({message:"Buyer deleted",data:delBuyer})
      }
    }
    catch(error){
      return res.status(500).json({message:"server error",error:error.message})
    }
  }
  const login=async(req,res)=>{
    try{
      const Email=req.body.email;
      const Password=req.body.password;
  
      console.log('body', req.body)
  
      const findBuyer=await BuyerModel.findOne({email: Email})
      console.log(findBuyer);
      
     
      if(!findBuyer){
         return res.status(404).json({message:"Invalid buyer mail id"})
        }
       const isSame = await checkPass(Password, findBuyer.password)
       console.log(isSame);
       
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
      console.log("error:",err);
      
      return res.status(500).json({err, message: "Server error"})
    }
  }
module.exports={addBuyer,findBuyer,findAllBuyers,findandupdate,findanddelete,login}