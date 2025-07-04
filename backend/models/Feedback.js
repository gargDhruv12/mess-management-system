const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  rollNumber: { type: String, required: true },
  category: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 },
  message: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
