const express = require("express");
const BuyerRouter = express.Router();

const {
  addBuyer,
  findBuyer,
  findAllBuyers,
  findandupdate,
  findanddelete,
  login,
} = require("../controller/Buyer.controller.js");

const { protectRoute } = require("../Middlewares/jwtAuth.js");
const { uploadBuyerSellerImg } = require("../Middlewares/multer.js");
const { validatePassword } = require("../Middlewares/validatePassword.js");
const { emailValidation } = require("../Middlewares/validateEmail.js");
const { validatePhoneno } = require("../Middlewares/validatePhoneNumber.js");
const { fileValidation } = require("../Middlewares/validateFile.js");
BuyerRouter.get("/", (req, res) => {
  return res.json({ message: "It is a buyer Router" });
});
BuyerRouter.post(
  "/addbuyer",
  uploadBuyerSellerImg.single("buyerImg"),
  fileValidation,
  emailValidation,
  validatePassword,
  validatePhoneno,
  addBuyer
);
BuyerRouter.get("/findbuyer/:id", protectRoute, findBuyer);
BuyerRouter.get("/findallbuyers", protectRoute, findAllBuyers);
BuyerRouter.patch("/findandupdate/:id",uploadBuyerSellerImg.single("buyerImg"),findandupdate);
BuyerRouter.delete("/findanddelete/:id", findanddelete);
BuyerRouter.post("/login", login);
module.exports = { BuyerRouter };
