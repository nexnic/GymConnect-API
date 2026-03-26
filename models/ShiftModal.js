const mongoose = require('mongoose');

const ShiftSchema = new mongoose.Schema(
  {
    shiftId: { type: String, unique: true },
    staffId: String,
    date: Date,
    startTime: String,
    endTime: String,
    notes: String,
  },
  { timestamps: true },
);

export default mongoose.model('Shift', ShiftSchema);
