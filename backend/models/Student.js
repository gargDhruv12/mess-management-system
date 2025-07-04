const mongoose = require('mongoose');

const extraItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  date: { type: Date, default: Date.now }
});

const studentSchema = new mongoose.Schema({
  name: String,
  rollNumber: { type: String, unique: true },
  balance: Number,
  extras: [extraItemSchema],
});

module.exports = mongoose.model('Student', studentSchema);
