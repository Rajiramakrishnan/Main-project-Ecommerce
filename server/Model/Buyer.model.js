const mongoose=require("mongoose")
const {Schema,model}=mongoose;
const BuyerSchema=Schema(
{
fullName:{
    required:true,
    type:String
},
email:{
    required:true,
    type:String,
    unique:true
},
password:{
    required:true,
    type:password,
    unique:true

},
confirmPassword:{
    required:true,
    type:String,

},
phoneNumber:{
    required:true,
    type:String,


},
address:{
    required:true,
    type:String
},
district:{
    required:true,
    type:String
},
state:{
    required:true,
    type:String
},
pincode:{
    required:true,
    type:String,
},
dateOfBirth:{
    required:true,
    type:String,

},
buyerImg:{
    required:true,
    type:String

}

},
{
    timestamps: true 
}
);
const BuyerModel = model("Buyer",BuyerSchema);
module.exports = {BuyerModel };
