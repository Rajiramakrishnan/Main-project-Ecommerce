const express=require("express")
const productRouter = express.Router();
const {validatProductAddRequiredFields,validateDiscount}=require("../../server/Middlewares/validaeProductAddRequiredFields.js")
   
const{ uploadBuyerSellerImg}=require("../../server/Middlewares/multer.js")
const{calculateAvgRating}=require("../Middlewares/validateAvgRating.js")

const{addProduct,
    fetchProductBySeller,
    getAllproducts,
    getProductById,
    updateProduct,
    addRatingToProduct,
    getReviews,
    sortByPriceAscending,
    sortByPriceDescending,
    sortByRatingsDescending,
    filterByCategory,
    searchProduct,
    priceRangeFilter,}=require("../../server/controller/product.controller.js")
    
productRouter.post(
    "/addProduct",
    uploadBuyerSellerImg.single("productImage"),
    validatProductAddRequiredFields,
    validateDiscount,
    addProduct
  );
  productRouter.patch(
    "/updateproduct/:productId",
    uploadBuyerSellerImg.single("productImage"),
    validatProductAddRequiredFields,
    validateDiscount,
    updateProduct
  );
  productRouter.get("/fetchProductbyseller/:sellerId", fetchProductBySeller);
productRouter.get("/viewall", getAllproducts);
productRouter.get("/getproductbyid/:productId", getProductById);
productRouter.patch(
  "/addRating/:buyerId/:productId",
  calculateAvgRating,
  addRatingToProduct
);
productRouter.get("/reviews/:productId", getReviews);
productRouter.get("/sortByLowToHigh", sortByPriceAscending);
productRouter.get("/sortByHighToLow", sortByPriceDescending);
productRouter.get("/sortByRating", sortByRatingsDescending);
productRouter.get("/filterByCategory", filterByCategory);
productRouter.get("/search", searchProduct);
productRouter.get("/priceRange", priceRangeFilter);
module.exports = {productRouter};