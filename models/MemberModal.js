const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema(
  {
    memberID: { type: String, unique: true },
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    dob: Date,
    type: { type: String, enum: ['monthly', 'quarterly', 'annual'] },
    paidUntil: Date,
    active: { type: Boolean, default: true },
    notes: String,
    joinDate: Date,
  },
  { timestamps: true },
);

export default mongoose.model('Member', MemberSchema);
