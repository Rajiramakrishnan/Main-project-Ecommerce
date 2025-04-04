const OrderModel = require("../Model/Order.model.js");
const { isvalidId } = require("../Utils/isValidid.js");
const { format } = require("date-fns");
const addOrder = async (req, res) => {
  try {
    const { buyerId } = req.params;
    const {
      productDetails,
      email,
      fName,
      lName,
      stateRegion,
      address,
      contact,
      cardHolderName,
      cardNo,
      expiryDate,
      cvv,
      price,
      shippingCharge,
      discountPrice,
      totalPrice,
    } = req.body;
    if(!isvalidId(buyerId)){
        return res.status(400).json({message:"Buyer Id is not Valid "})
    }
    productDetails.map(({ productId, quantity }) => {
        if (!isvalidId(productId)) {
          return res.status(400).json({ message: "Product Id is not valid" });
        }
      });
      const newOrder = new OrderModel({
        buyerId,
        orderedProducts: productDetails.map(({ productId, quantity }) => ({
          productId,
          quantity,
        })),
        email,
        fName,
        lName,
        stateRegion,
        address,
        contact,
        cardHolderName,
        cardNo,
        expiryDate,
        cvv,
        price,
        shippingCharge,
        discountPrice,
        totalPrice,
      });
      await newOrder.save();
    return res
      .status(201)
      .json({ message: "Order added successfully", data: newOrder });

  } catch (error) {
    console.log("Error on adding orders", error.message);
    return res
      .status(500)
      .json({ message: "Internal Server error", error: error.message });
  }
};
const fetchPendingOrdersByBuyerId=async(req,res)=>{
  try{
    const {buyerId}=req.params;
 if(!(isvalidId(buyerId))){
  return res.status(400).json({message:"Invalid buyer Id"})
 }
const orders=await OrderModel.find({buyerId}).populate("orderedProducts.productId").exec();
if(orders.length==0){
  return  res.status(404).json({message:"No orders found"})

}
const pendingOrders = orders
      .map((order) => {
        const filteredOrders = order.orderedProducts.filter(
          (product) => product.deliveryStatus === "pending"
        );
        return filteredOrders.length > 0
        ? {
            ...order.toObject(),
            orderedProducts: filteredOrders,
          }
        : null;
    })
    .filter((order) => order !== null);
    
    if (pendingOrders.length === 0) {
      return res.status(404).json({ message: "No pending orders" });
    }

    return res
      .status(200)
      .json({ message: "Orders fetched successfully", data: pendingOrders });
  }catch(error){
    console.log("Error on fetching products");
    
    return res.status(500).json({message:"Intrenal server error",error:error.message})
  }
}
module.exports={addOrder,fetchPendingOrdersByBuyerId}
