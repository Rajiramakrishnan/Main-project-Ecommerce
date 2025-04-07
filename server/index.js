const express = require("express");
const app = express();
const port = 8000;
const { BuyerRouter } = require("./Routes/Buyer.Routes.js");
const {SellerRouter}=require("./Routes/Seller.Routes.js")
const {productRouter}=require("../server/Routes/Product.Routes.js")
const cors = require("cors");
const connectDB = require("./DB/ConnectDB.js");
const OrderRouter = require("./Routes/Order.Routes.js");
const CartRouter = require("./Routes/Carts.Routes.js");
const ComplaintRouter = require("./Routes/complaint.Routes.js");
const WishlistRouter=require("../server/Routes/Wishlist.Routes.js")
const AuthRouter=require("../server/Routes/Auth.Routes.js")
app.use(express.json());
app.use(cors());
console.log("dir nam", __dirname);

app.use(express.static(`${__dirname}/upload`));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/ecommerce_api/buyer", BuyerRouter);
app.use("/ecommerce_api/seller", SellerRouter);
app.use("/ecommerce_api/product",productRouter)
app.use("/ecommerce_api/order",OrderRouter)
app.use("/ecommerce_api/cart",CartRouter)
app.use("/ecommerce_api/complaint",ComplaintRouter)
app.use("/ecommerce_api/wishlist",WishlistRouter)
app.use("/ecommerce_api/auth", AuthRouter);
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
