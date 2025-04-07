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
    if (!isvalidId(buyerId)) {
      return res.status(400).json({ message: "Buyer Id is not Valid " });
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
const fetchPendingOrdersByBuyerId = async (req, res) => {
  try {
    const { buyerId } = req.params;
    if (!isvalidId(buyerId)) {
      return res.status(400).json({ message: "Invalid buyer Id" });
    }
    const orders = await OrderModel.find({ buyerId })
      .populate("orderedProducts.productId")
      .exec();
    console.log(orders);
    if (orders.length == 0) {
      return res.status(404).json({ message: "No orders found" });
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
  } catch (error) {
    console.log("Error on fetching products");

    return res
      .status(500)
      .json({ message: "Intrenal server error", error: error.message });
  }
};
const fetchDeliveredOrdersByBuyerId = async (req, res) => {
  try {
    const { buyerId } = req.params;
    const currentDate = format(new Date(), "yyyy-mm-dd");
    if (!isvalidId(buyerId)) {
      return res.status(404).json({ message: "Invalid buyer id" });
    }

    const orders = await OrderModel.find({ buyerId })
      .populate("orderedProducts.productId")
      .exec();
    console.log(orders);

    if (orders.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }
    const deliveredOrders = orders
      .map((order) => {
        const filteredOrders = orders.orderedProducts.filter(
          (product) =>
            format(product.deliveryDate, "yyyy-MM-dd") < currentDate &&
            product.deliveryDate !== null
        );
        console.log(filteredOrders);

        return filteredOrders.length > 0
          ? {
              ...order.toObject(),
              orderedProducts: filteredOrders,
            }
          : null;
      })
      .filter((order) => order !== null);

    if (deliveredOrders.length === 0) {
      return res.status(404).json({ message: "No past delivered orders" });
    }

    return res
      .status(200)
      .json({ message: "Orders fetched successfully", data: deliveredOrders });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
const fetchOrdersBySellerId = async (req, res) => {
  try {
    const { sellerId } = req.params;

    if (!isvalidId(sellerId)) {
      return res.status(400).json({ message: "Seller id is not valid" });
    }
    const orders = await OrderModel.find()
      .populate({
        path: "orderedProducts.productId", // Populate productId within orderedProducts
        populate: {
          path: "sellerId", // Populate sellerId from the ProductModel
        },
      })
      .exec();
    const filteredOrders = orders
      .map((order) => {
        // Filter orderedProducts based on sellerId and deliveryStatus
        const filteredProducts = order.orderedProducts.filter(
          (orderedProduct) =>
            orderedProduct.productId.sellerId._id.toString() === sellerId &&
            orderedProduct.deliveryStatus === "pending"
        );
        // Return order only if it has at least one matching product
        return filteredProducts.length > 0
          ? { ...order.toObject(), orderedProducts: filteredProducts }
          : null;
      })
      .filter((order) => order !== null);

    if (filteredOrders.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }

    return res
      .status(200)
      .json({ message: "Orders fetched successfully", data: filteredOrders });
  } catch (error) {
    console.log("Error on fetching orders by seller id", error);
    return res.status(500).json({ message: "Server Error" });
  }
};
const setDeliveryDate = async (req, res) => {
  try {
    const { orderId, productId } = req.params;
    const { deliveryDate } = req.query;

    if (!isvalidId(orderId)) {
      return res.status(400).json("Invalid order id");
    }

    if (!isvalidId(productId)) {
      return res.status(400).json("Invalid product id");
    }
    const orders = await OrderModel.findById(orderId);
    if (!orders) {
      return res.status(400).json({ message: "Orders is not found" });
    }

    const findProduct = orders.orderedProducts.find(
      (item) => item.productId._id.toString() === productId
    );
    findProduct.deliveryDate = deliveryDate;
    findProduct.deliveryStatus = "confirmed";

    if (!findProduct) {
      return res.status(404).json({ message: "Orders not updated or found" });
    }
    const updOrderDetails = await orders.save();

    return res.status(200).json({
      message: "Delivery date updated successfully",
      data: updOrderDetails,
    });
  } catch (error) {
    console.log("Error on updating delivery date", error);
    return res.status(500).json({ message: "Server Error" });
  }
};
const fetchConfirmedOrders = async (req, res) => {
  try {
    const { sellerId } = req.params;

    if (!isvalidId(sellerId)) {
      return res.status(400).json({ message: "Invalid seller id" });
    }

    const orders = await OrderModel.find()
      .populate({
        path: "orderedProducts.productId",
        populate: {
          path: "sellerId",
        },
      })
      .exec();

    if (!orders) {
      return res.status(404).json({ message: "No orders found" });
    }

    const confirmedOrders = orders
      .map((order) => {
        const filteredProducts = order.orderedProducts.filter(
          (orderedProduct) =>
            orderedProduct.productId.sellerId._id.toString() === sellerId &&
            orderedProduct.deliveryStatus === "confirmed"
        );
        return filteredProducts.length > 0
          ? {
              ...order.toObject(),
              orderedProducts: filteredProducts,
            }
          : null;
      })
      .filter((order) => order !== null);

    if (confirmedOrders.length === 0) {
      return res.status(404).json({ message: "No confirmed orders found" });
    }

    return res.status(200).json({
      message: "Fetched confirmed orders successfully",
      data: confirmedOrders,
    });
  } catch (error) {
    console.log("Error on fetching confirmed orders", error);
    return res.status(500).json({ message: "Server Error" });
  }
};
const fetchDeliveredOrders = async (req, res) => {
  try {
    const { sellerId } = req.params;

    if (!isvalidId(sellerId)) {
      return res.status(400).json({ message: "Invalid seller id" });
    }

    const currentDate = format(new Date(), "yyyy-MM-dd");

    const orders = await OrderModel.find()
      .populate({
        path: "orderedProducts.productId",
        populate: {
          path: "sellerId",
        },
      })
      .exec();

    if (!orders) {
      return res.status(404).json({ message: "No orders found" });
    }

    const deliveredOrders = orders
      .map((order) => {
        const filteredProducts = order.orderedProducts.filter(
          (orderedProduct) =>
            orderedProduct.productId.sellerId._id.toString() === sellerId &&
            format(orderedProduct.deliveryDate, "yyyy-MM-dd") < currentDate &&
            orderedProduct.deliveryDate !== null
        );

        return filteredProducts.length > 0
          ? { ...order.toObject(), orderedProducts: filteredProducts }
          : null;
      })
      .filter((order) => order !== null);

    if (deliveredOrders.length === 0) {
      return res.status(404).json({ message: "No delivered orders found" });
    }

    return res.status(200).json({
      message: "Fetched delivered orders successfully",
      data: deliveredOrders,
    });
  } catch (error) {
    console.log("Error on fetching delivered orders", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

const fetchAllOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find()
      .populate("orderedProducts.productId")
      .exec();

    if (orders.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }
    return res
      .status(200)
      .json({ message: "Orders fetched successfully", data: orders });
  } catch (error) {
    console.log("Error on fetching orders", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  addOrder,
  fetchPendingOrdersByBuyerId,
  fetchDeliveredOrdersByBuyerId,
  fetchOrdersBySellerId,
  setDeliveryDate,
fetchConfirmedOrders,
fetchDeliveredOrders,

fetchAllOrders




};
