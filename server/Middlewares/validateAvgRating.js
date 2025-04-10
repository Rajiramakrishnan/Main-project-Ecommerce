const productModel = require("../../server/Model/product.model.js");
const ProductModel = require("../../server/Model/product.model.js");
const {isvalidId} = require("../Utils/isValidid.js");

const calculateAvgRating = async (req, res, next) => {
  try {
    const { productId } = req.params;
    // console.log(productId);
    

    if (!isvalidId(productId)) {
      return res.status(404).json({ message: "Product id is not valid" });
    }
    const product = await productModel.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const totalReviews = product.review.length;
    const totalRatings = product.review.reduce(
      (sum, review) => sum + review.rating,
      0
    );

    let avgRating;
    if (totalRatings > 0 && totalReviews > 0) {
      avgRating = totalRatings / totalReviews;
    } else {
      avgRating = 0;
    }

    await ProductModel.findByIdAndUpdate(productId, { avgRating });

    next();

    // return res.status(200).json({message:"Average rating updated successfully"})
  } catch (error) {
    console.log("Error in avg rating calculation", error);
    return res.status(500).json({ message: "Error in avg rating calculation" });
  }
};

module.exports = { calculateAvgRating };
