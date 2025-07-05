const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { addExtraItem } = require('../controllers/extraController');

router.post('/:rollNumber', protect, addExtraItem); // Student adds extra item

module.exports = router;
