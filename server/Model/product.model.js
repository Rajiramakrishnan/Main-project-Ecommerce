const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: [
        "fashion",
        "appliances",
        "electronics",
        "homeandkitchen",
        "booksandtoys",
      ],
      required: true,
    },
    actualPrice: {
      type: Number,
      required: true,
    },
    currentPrice: {
      type: Number,
      required: true,
    },
    discountPercent: {
      type: Number,
      required: true,
    },
    discountPriceApplied: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    specification: {
      type: String,
      required: true,
    },
    care: {
      type: String,
      required: true,
    },
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "seller",
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    review: [
      {
        buyerId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "buyer",
          required: true,
        },
        buyerName: {
          type: String,
          required: true,
        },
        reviewMessage: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
          min: 1,
          max: 5,
        },
        postedDate: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    avgRating: {
      type: Number,
      default: 0,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);
const productModel=model("product",productSchema)
module.exports=productModel;