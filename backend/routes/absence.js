const express = require('express');
const router = express.Router();
const { submitAbsence, getAbsenteesByDate } = require('../controllers/absenceController');

router.post('/', submitAbsence);
router.get('/:date', getAbsenteesByDate);

module.exports = router;
