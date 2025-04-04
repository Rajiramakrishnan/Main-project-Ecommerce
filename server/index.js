const express = require("express");
const app = express();
const port = 8000;
const { BuyerRouter } = require("./Routes/Buyer.Routes.js");
const {SellerRouter}=require("./Routes/Seller.Routes.js")
const {productRouter}=require("../server/Routes/Product.Routes.js")
const cors = require("cors");
const connectDB = require("./DB/ConnectDB.js");
const OrderRouter = require("./Routes/Order.Routes.js");
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
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
