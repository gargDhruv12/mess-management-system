const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => res.send('API Running'));

// Mock data for students
const students = [
  { rollNumber: '123', name: 'John Doe', balance: 30000, extraItems: [], absenceRequests: [] },
  { rollNumber: '456', name: 'Jane Smith', balance: 30000, extraItems: [], absenceRequests: [] },
];

app.get('/api/students', (req, res) => {
  res.json(students);
});

app.post('/api/students/:rollNumber/extra', (req, res) => {
  const { rollNumber } = req.params;
  const extraItem = req.body;
  const student = students.find(s => s.rollNumber === rollNumber);
  if (student) {
    student.extraItems.push(extraItem);
    res.json(student);
  } else {
    res.status(404).json({ message: 'Student not found' });
  }
});

app.post('/api/students/:rollNumber/absence', (req, res) => {
  const { rollNumber } = req.params;
  const absenceRequest = req.body;
  const student = students.find(s => s.rollNumber === rollNumber);
  if (student) {
    student.absenceRequests.push(absenceRequest);
    res.json(student);
  } else {
    res.status(404).json({ message: 'Student not found' });
  }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
