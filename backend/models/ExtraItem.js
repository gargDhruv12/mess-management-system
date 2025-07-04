const mongoose = require('mongoose');

const extraItemSchema = new mongoose.Schema({
  rollNumber: { type: String, required: true },
  item: { type: String, required: true },
  cost: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ExtraItem', extraItemSchema);
