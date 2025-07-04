const mongoose = require('mongoose');

const rationItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  stock: { type: Number, required: true },
  unit: { type: String, enum: ['kg', 'liters', 'pieces'], required: true },
  costPerUnit: { type: Number, required: true },
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('RationItem', rationItemSchema);
