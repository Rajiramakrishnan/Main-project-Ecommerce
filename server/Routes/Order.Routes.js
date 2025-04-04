const {addOrder,fetchPendingOrdersByBuyerId}=require("../controller/Order.controller");
const express=require("express")
const OrderRouter=express.Router();
OrderRouter.post("/addorder/:buyerId",addOrder);
OrderRouter.get("/pendinglist/:buyerId",fetchPendingOrdersByBuyerId);
module.exports=OrderRouter;