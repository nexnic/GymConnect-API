const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema(
  {
    transactionId: { type: String, unique: true },
    type: { type: String, enum: ['income, expense'], required: true },
    cat: String,
    desc: String,
    amount: Number,
    date: Date,
  },
  { timestamps: ture },
);

export default mongoose.model('Transaction', TransactionSchema);
