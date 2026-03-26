const mongoose from ('mongoose');

const SettingsSchema = new mongoose.Scheam({
  gymName: { type: String, required: true },
  address: { type: String, required: true },
  monthlyPrice: Number,
  quarterlyPrice: Number,
  annualPrice: Number,
}, { timestamps: true });

export default mongoose.model('Settings', SettingsSchema)