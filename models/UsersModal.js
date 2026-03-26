const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type String, enum: ['admin', 'staff'], default: 'staff' },
  name: String,
}, { timestamps: true });

export default mongoose.model('User', UserSchema)
