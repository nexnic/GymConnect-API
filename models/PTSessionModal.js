const mongoose = require('mongoose');

const PTSessionSchema = new mongoose.Schema(
  {
    sessionId: { type: String, unique: true },
    memberId: String,
    staffId: String,
    date: Date,
    duration: Number,
    notes: String,
  },
  { timestamps: true },
);

export default mongoose.model('PTSession', PTSessionSchema);
