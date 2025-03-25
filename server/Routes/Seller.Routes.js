const express=require("express")
const SellerRouter=express.Router();
const {addSeller,findAllSellers,findSeller,findandupdate,findanddelete,login}=require("../controller/seller.controller.js")
const { uploadBuyerSellerImg } = require("../Middlewares/multer.js");
const { protectRoute } = require("../Middlewares/jwtAuth.js");
const { validatePassword } = require("../Middlewares/validatePassword.js");
const { emailValidation } = require("../Middlewares/validateEmail.js");
const { validatePhoneno } = require("../Middlewares/validatePhoneNumber.js");
const { fileValidation } = require("../Middlewares/validateFile.js");


SellerRouter.get("/", (req, res) => {
  return res.json({ message: "It is a seller Router" });
});
SellerRouter.post("/addseller",uploadBuyerSellerImg.single("sellerImg"),
emailValidation,
validatePassword,
validatePhoneno,addSeller)
SellerRouter.get("/findallsellers",protectRoute,findAllSellers);
SellerRouter.get("/findseller/:id",protectRoute,findSeller);
SellerRouter.patch("/findandupdate/:id",uploadBuyerSellerImg.single("sellerImg"),findandupdate);
SellerRouter.delete("/findanddelete/:id",findanddelete);
SellerRouter.post("/login",login)
module.exports = { SellerRouter };