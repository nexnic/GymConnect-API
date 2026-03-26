const mongoose = require('mongoose');

const CounterSchema = new mongoose.Schema({
  key: { type: String, unique: true },
  value: { type: Number, default: 1 },
});

export default mongoose.model('Counter', CounterSchema);

export async function getNextId(key, prefix) {
  const counter = await Counter.findOneAndUpdate(
    { key },
    { $inc: { value: 1 } },
    { new: true, upsert: true },
  );

  return prefix + counter.value.toString().padStart(3, '0');
}
