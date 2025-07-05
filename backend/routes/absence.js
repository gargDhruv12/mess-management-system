const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { requestAbsence } = require('../controllers/absenceController');

router.post('/:rollNumber', protect, requestAbsence);

module.exports = router;
