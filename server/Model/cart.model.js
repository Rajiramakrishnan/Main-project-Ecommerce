const mongoose=require("mongoose");
const {model,Schema}=mongoose;
const cartSchema=new Schema({
    buyerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Buyer",
        required:true
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:true

    },
},
{timestamps:true}
);
const CartModel=model("cart",cartSchema);
module.exports={CartModel};