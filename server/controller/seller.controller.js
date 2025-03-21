const {SellerModel} = require("../Model/seller.model.js");
const bcrypt = require("bcrypt");
const { genToken } = require("../Utils/generateToken.js");
const { checkPass } = require("../Utils/password.js");
const addSeller = async (req, res) => {
  try {
    let imgPath = req.file;
    const {
      name,
      email,
      phoneNumber,
      address,
      state,
      pincode,
      gstNumber,
      password,
      district,
      confirmPassword,
    } = req.body;
    const saltRound = 20;
    console.log(password);
    const hashedPassword = await bcrypt.hash(password, saltRound);
    console.log("hashed password:", hashedPassword);
    const seller = new SellerModel({
      name,
      email,
      phoneNumber,
      address,
      state,
      pincode,
      district,
      gstNumber,
      password: hashedPassword,
      confirmPassword,
      sellerImg: imgPath.filename,
    });
    console.log(seller);
    
    await seller.save();
    return res.status(201).json({message:"Seller Record creted",data:seller})

  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error", error: error.message });
  }
};
const findSeller=async(req,res)=>{
  try{
    const sellerId=req.params.id;
    console.log(sellerId);
     const seller=await SellerModel.findById(sellerId);
     if(!seller){
      return res.status(404).json({message:"seller not found"})
     }
    return res.status(200).json({message:"seller found",data:seller})
  }catch(error){
    return res.status(500).json({message:"Server Error",error:error.message})
  }
}
const findAllSellers=async(req,res)=>{
  try{
     const sellers=await SellerModel.find();
     console.log(sellers);
     
     
    return res.status(200).json({message:"Sellers found",data:sellers})
  }catch(error){
    return res.status(500).json({message:"Server Error",error:error.message})
  }
}
const findandupdate=async(req,res)=>{
  try{
    const sellerId=req.params.id;
    console.log(sellerId);
    
    const newPassword=req.body.newPassword;
    console.log(newPassword);
    
    const saltRound=10;
    const hashedNewPassword=await bcrypt.hash(newPassword, saltRound)
    console.log(hashedNewPassword);
    const newEmail=req.body.newEmail;
    console.log(newEmail);



    
    const newseller=await SellerModel.findByIdAndUpdate(sellerId,{password:hashedNewPassword,email:newEmail},{new:true})
    console.log(newseller);
    if(!newseller){
      return res.status(404).json({message:"Seller  not found"})
    }
    else{
      return res. status(200).json({message:"Seller updated",data:newseller})
    }
    
    
  }
  catch(error){
    return res.status(500).json({message:"server error"})
  }
}
const findanddelete=async (req,res)=>{
  try{
    const sellerId=req.params.id;
    const delSeller=await SellerModel.findByIdAndDelete(sellerId)
    console.log(delSeller);
    if(!delSeller){
      return res.status(404).json({message:"Seller not deleted"})
    }
    else{
      return res.status(200).json({message:"seller deleted",data:delSeller})
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

    const findSeller=await SellerModel.findOne({email: Email})
    console.log(findSeller);
    
   
    if(!findSeller){
       return res.status(404).json({message:"Invalid seller mail id"})
      }
     const isSame = await checkPass(Password, findSeller.password)
   if (!isSame) {
        
        return res.status(404).json({message:"user not found"})
    }

    const obj = {
      id: findSeller._id,
      email: findSeller.email
    }
    const token = genToken(obj)
    console.log(token)

    return res.status(200).json({data: findSeller, token})
  }catch(err) {
    console.log("error:",err);
    
    return res.status(500).json({err, message: "Server error"})
  }
}
module.exports={addSeller,findSeller,findAllSellers,findandupdate,findanddelete,login}