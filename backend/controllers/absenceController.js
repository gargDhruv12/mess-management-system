const Absence = require('../models/Absence');

exports.submitAbsence = async (req, res) => {
  try {
    const absence = new Absence(req.body);
    await absence.save();
    res.status(201).json({ message: 'Absence request submitted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error submitting absence', error: err.message });
  }
};

exports.getAbsenteesByDate = async (req, res) => {
  try {
    const absentees = await Absence.find({ date: req.params.date });
    res.json(absentees);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching absentees', error: err.message });
  }
};
