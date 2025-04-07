const express=require("express");
const CartRouter=express.Router();
const { addToCart, fetchCartItems, deleteCartItem}=require('../../server/controller/cart.controller');
CartRouter.post("/addtocart/:buyerId/:productId",addToCart);
CartRouter.get("/getcartitems/:buyerId",fetchCartItems);
CartRouter.delete("/deletecartitem/:buyerId/:productId",deleteCartItem)
module.exports=CartRouter;