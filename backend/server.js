// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import Routes
const studentRoutes = require('./routes/students');
const authRoutes = require('./routes/auth');
const feedbackRoutes = require('./routes/feedback');
const rationRoutes = require('./routes/ration');
const extraRoutes = require('./routes/extra');
const absenceRoutes = require('./routes/absence');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/ration', rationRoutes);
app.use('/api/extra', extraRoutes);
app.use('/api/absence', absenceRoutes);

// Root Route
app.get('/', (req, res) => res.send('🚀 Mess Management API is running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
