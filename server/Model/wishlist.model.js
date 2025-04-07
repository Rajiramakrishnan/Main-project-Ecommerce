const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const wishlistSchema = new Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
    buyerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Buyer",
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const wishlistModel = model("wishlist", wishlistSchema);

module.exports = wishlistModel;
