const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  staffID: { type: String, unique: true },
  firstName: String,
  lastName: String,
  role: String,
  email: String,
  startDate: Date,
  hourlyRate: Number,
  notes: String,
  active: { type: Boolean, default: true },
}{ timestamps: true });

export default mongoose.model('Staff', staffSchema)
