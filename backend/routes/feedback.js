const express = require('express');
const router = express.Router();
const { submitFeedback, getFeedbacks } = require('../controllers/feedbackController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

// Students submit feedback
router.post('/', protect, submitFeedback);

// Admin can view all feedback
router.get('/', protect, isAdmin, getFeedbacks);

module.exports = router;
