const mongoose=require("mongoose");
const { applyTimestamps } = require("./cart.model");
const {Schema,model}=mongoose;
const complaintSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    complaint:{
        type:String,
        required:true,

    },},

    { timestamps: true },

)
const complaintModel=model('complaint',complaintSchema)
module.exports=complaintModel;