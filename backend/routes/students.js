const express = require('express');
const router = express.Router();
const { getAllStudents, getStudentById, addExtraItem, requestAbsence } = require('../controllers/studentController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

// Only admins should access full student list
router.get('/', protect, isAdmin, getAllStudents);

// Student-specific routes
router.get('/:id', protect, getStudentById);
router.post('/:rollNumber/extra', protect, addExtraItem);
router.post('/:rollNumber/absence', protect, requestAbsence);

module.exports = router;
