const express = require('express');
const router = express.Router();
const {
  getAllStudents,
  getStudentById
} = require('../controllers/studentController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

// Admin can view all students
router.get('/', protect, isAdmin, getAllStudents);

// Authenticated users can view their own info
router.get('/:id', protect, getStudentById);

module.exports = router;
