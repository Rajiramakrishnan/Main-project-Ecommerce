const express=require("express")
const WishlistRouter=express.Router();
const { addToWishlist, getWishlist, removeFromWishlist }=require("../../server/controller/wishlist.controller")
WishlistRouter.post("/addtowishlist/:buyerId/:productId",addToWishlist);
WishlistRouter.get("/getwishlist/:buyerId",getWishlist);
WishlistRouter.delete("/deletewishlist/:buyerId/:productId",removeFromWishlist)
module.exports=WishlistRouter;