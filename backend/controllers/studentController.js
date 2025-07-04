const Student = require('../models/Student');
const ExtraItem = require('../models/ExtraItem');
const Absence = require('../models/Absence');

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().populate('extraItems').populate('absenceRequests');
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Add extra item for a student
exports.addExtraItem = async (req, res) => {
  try {
    const { rollNumber } = req.params;
    const { name, price } = req.body;

    const student = await Student.findOne({ rollNumber });
    if (!student) return res.status(404).json({ message: 'Student not found' });

    const newItem = new ExtraItem({ name, price });
    await newItem.save();

    student.extraItems.push(newItem._id);
    await student.save();

    res.json(student);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Add absence request for a student
exports.addAbsenceRequest = async (req, res) => {
  try {
    const { rollNumber } = req.params;
    const { date, reason } = req.body;

    const student = await Student.findOne({ rollNumber });
    if (!student) return res.status(404).json({ message: 'Student not found' });

    const newAbsence = new Absence({ date, reason });
    await newAbsence.save();

    student.absenceRequests.push(newAbsence._id);
    await student.save();

    res.json(student);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
