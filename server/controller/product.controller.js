const {isvalidId} = require("../../server/Utils/isValidid.js");
const productModel = require("../../server/Model/product.model.js");
const addProduct = async (req, res) => {
  try {
    const {
      title,
      subTitle,
      category,
      actualPrice,

      discountPercent,

      description,
      specification,
      care,
      sellerId,
    } = req.body;

    if (!isvalidId(sellerId)) {
      return res.status(404).json({ message: "Seller not found" });
    }
    const newProduct = new productModel({
      title,
      subTitle,
      category,
      actualPrice,
      discountPercent,
      currentPrice: req.currentPrice,
      discountPriceApplied: req.discountPriceApplied,
      description,
      specification,
      care,
      sellerId,
      productImage: req.file.filename,
    });
    await newProduct.save();
    return res
      .status(201)
      .json({ message: "Product added successfully", data: newProduct });
  } catch (error) {
    console.log("Error on seller adding products", error);
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};
const fetchProductBySeller = async (req, res) => {
  try {
    const { sellerId } = req.params;
    if (!isvalidId(sellerId)) {
      return res.status(404).json({ message: "seller not found" });
    }
    const allProducts = await productModel
      .find({ sellerId })
      .populate("sellerId")
      .exec();
    if (allProducts.length == 0) {
      return res
        .status(404)
        .json({ message: "No products found on this seller" });
    }

    return res
      .status(200)
      .json({
        message: "All products found on this seller",
        data: allProducts,
      });
  } catch (error) {
    console.log("No products found on this seller id", error);
    return res
      .status(500)
      .json({ message: "server error", error: error.message });
  }
};
const getAllproducts = async (req, res) => {
  try {
    const allProducts = await productModel.find();
    if (allProducts.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }
    return res
      .status(200)
      .json({ message: "products found successfully", data: allProducts });
  } catch (error) {
    console.log("Error on fetching products", error);
    return res
      .status(500)
      .json({ message: "server errror", error: error.message });
  }
};
const getProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    if (!isvalidId(productId)) {
      return res.status(404).json({ message: "Invalid product id" });
    }
    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(201).json({ message: "Product found", data: product });
  } catch (error) {
    console.log("Error on fetching products by id");
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
//update products details
const updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    if (!isvalidId(productId)) {
      return res.status(404).json({ message: "Product not found on this id" });
    }
    const {
      title,
      subTitle,
      category,
      actualPrice,
      currentPrice,
      discountPercent,
      description,
      specification,
      care,
    } = req.body;
    productImage = req.file;
    const updatedProduct = await productModel.findByIdAndUpdate(
      productId,
      {
        title,
        subTitle,
        category,
        actualPrice,
        currentPrice,
        discountPercent,
        description,
        specification,
        care,
        productImage: req?.file?.filename,
      },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(400).json({ message: "product not updated" });
    }
    return res
      .status(200)
      .json({ message: "Product updated", data: updatedProduct });
  } catch {
    console.log("error on updating product details");
    res.status(500).json({ message: "server error", error: error.message });
  }
};
const addRatingToProduct = async (req, res) => {
  try {
    const { buyerName, reviewMessage, rating } = req.body;
    const { buyerId, productId } = req.params;
    if (!isvalidId(productId)) {
      return res.status(404).json({ message: "Product id is not valid" });
    }

    if (!isvalidId(buyerId)) {
      return res.status(404).json({ message: "Buyer id is not valid" });
    }
    // Checking if the product has an existing review from the specific buyer
    const product = await productModel.findOne({
      _id: productId,
      "review.buyerId": buyerId,
    });
    if (product) {
      // if review rating already exist for the specific buyer then update the rating
      await productModel.updateOne(
        { _id: productId, "review.buyerId": buyerId },
        {
          $set: {
            "review.$.rating": rating,
            "review.$.buyerName": buyerName || null,
            "review.$.reviewMessage": reviewMessage || null,
          },
        }
      );
    } else {
      // if review rating doesn't exist then creating a new entry in the review array for the buyer
      await productModel.updateOne(
        { _id: productId },
        {
          $push: {
            review: {
              buyerId: buyerId,
              rating: rating,
              buyerName: buyerName || null,
              reviewMessage: reviewMessage || null,
            },
          },
        }
      );
    }
    return res
      .status(200)
      .json({ message: "RAting added successfully", data: product });
  } catch (error) {
    console.log("Error on adding rating to the product");
  }
};
const getReviews = async (req, res) => {
  try {
    const { productId } = req.params;
    if (!isvalidId(productId)) {
      return res.status(400).json({ message: "Invalid product id" });
    }
    const foundProduct = await productModel.findById(productId);
    if (foundProduct.review.length === 0) {
      return res.status(404).json({ message: "Reviews empty" });
    }
    return res
      .status(200)
      .json({
        message: "Review fetched successfully",
        data: foundProduct.review,
      });
  } catch (error) {
    console.log("error on feching reviews", error.message);
    return res
      .status(500)
      .json({ message: "server error", error: error.message });
  }
};
const sortByPriceAscending = async (req, res) => {
  try {
    const products = await productModel.find().sort({ currentPrice: 1 });
    if (products.length == 0) {
      return res.status(400).json({ message: "Products not fetched" });
    }
    return res
      .status(200)
      .json({
        message: "Products sorted in scending order",
        sortPriceLowToHigh: products,
      });
  } catch (error) {
    console.log("Error on sorting product on ascending order");
    return res
      .status(500)
      .json({ message: "server error", error: error.message });
  }
};
const sortByPriceDescending = async (req, res) => {
  try {
    const products = await productModel.find().sort({ currentPrice: -1 });
    if (products.length == 0) {
      return res.status(400).json({ message: "Products not fetched" });
    }
    return res
      .status(200)
      .json({
        message: "Products sorted in Descending order",
        sortPricehighToLow: products,
      });
  } catch (error) {
    console.log("Error on sorting product on ascending order");
    return res
      .status(500)
      .json({ message: "server error", error: error.message });
  }
};

const sortByRatingsDescending = async (req, res) => {
  try {
    const products = await productModel.find().sort({ avgRating: -1 });

    if (products.length === 0) {
      return res.status(400).json({ message: "Products not fetched" });
    }

    return res.status(200).json({
      message: "Sorted on ratings high to low",
      sortedByRating: products,
    });
  } catch (error) {
    console.log("Error on sorting by rating", error);
    return res.status(500).json({ message: "Server Error" });
  }
};
const filterByCategory = async (req, res) => {
  try {
    const { category } = req.query;

    const productByCategory = await productModel.find({ category });

    if (!productByCategory) {
      return res
        .status(404)
        .json({ message: "There are no products within this category" });
    }

    return res.status(200).json({
      message: "Products in the specified category",
      category: productByCategory,
    });
  } catch (error) {
    console.log("Error on filtering by category", error);
    return res.status(500).json({ message: "Server Error" });
  }
};
const searchProduct = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ message: "Search query is required" });
    }
    const searchTerm = new RegExp(query, "i"); // i ignore case
    // console.log(searchTerm);
    const results = await productModel.find({
      title: searchTerm,
      // { $regex: new RegExp("^" + searchTerm.toLowerCase(), "i") }
    });

    if (results.length === 0) {
      return res.status(404).json({ message: "No results found!!" });
    }

    return res.status(200).json({ message: "Search result", results: results });
  } catch (error) {
    console.log("Error on product search", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

const priceRangeFilter = async (req, res) => {
  try {
    const { minPrice, maxPrice } = req.query;
    console.log(minPrice);
    console.log(maxPrice);
    
    

    const productsInRange = await productModel.find({
      actualPrice: { $gte: minPrice, $lte: maxPrice },
    });
    console.log("product range",productsInRange);
    

    if (productsInRange.length === 0) {
      return res
        .status(404)
        .json({ message: "No Products available in this price range" });
    }

    return res.status(200).json({
      message: "Products in the range",
      productsByPriceRange: productsInRange,
    });
  } catch (error) {
    console.log("Error on product filtering by price range", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  addProduct,
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
  priceRangeFilter,
};
