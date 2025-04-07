const {addOrder,fetchPendingOrdersByBuyerId,fetchDeliveredOrdersByBuyerId,fetchOrdersBySellerId,setDeliveryDate, fetchConfirmedOrders, fetchDeliveredOrders,fetchAllOrders}=require("../controller/Order.controller");
const {validateDeliveryDate}=require("../../server/Middlewares/validateDeliveryDate")
const express=require("express")
const OrderRouter=express.Router();
OrderRouter.post("/addorder/:buyerId",addOrder);
OrderRouter.get("/pendinglist/:buyerId",fetchPendingOrdersByBuyerId);
OrderRouter.get("/deliveredlist/:buyerId",fetchDeliveredOrdersByBuyerId);
OrderRouter.get("/orderbyseller/:sellerId",fetchOrdersBySellerId);
OrderRouter.patch("/setdeliverydate/:orderId/:productId",validateDeliveryDate,setDeliveryDate);
OrderRouter.get("/confirmedorders/:sellerId",fetchConfirmedOrders);
OrderRouter.get("/deliveredorder/:sellerId",fetchDeliveredOrders);
OrderRouter.get("/getallorders/:sellerId",fetchAllOrders);
module.exports=OrderRouter;