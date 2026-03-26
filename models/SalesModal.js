const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
  saleId: { type: String, unique: true }
  productId: String,
  quantity: Number,
  total: Number,
  date: Date
}, { timestamps: true });

export default mongoose.model('Sale', SaleSchema);
