const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    productId: { type: String, unique: true },
    name: String,
    desc: String,
    emoji: String,
    price: Number,
    cost: Number,
    stock: Number,
  },
  { timestamps: true },
);

export default mongoose.model('Product', ProductSchema);
