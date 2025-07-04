const express = require('express');
const router = express.Router();
const {
  getAllStudents,
  addExtraItem,
  addAbsenceRequest
} = require('../controllers/studentController');

router.get('/', getAllStudents);
router.post('/:rollNumber/extra', addExtraItem);
router.post('/:rollNumber/absence', addAbsenceRequest);

module.exports = router;
