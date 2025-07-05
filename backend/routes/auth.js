const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { auth } = require('../middleware/auth');

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', async (req, res) => {
  try {
    const { username, password, role } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Please provide username and password' });
    }

    // Find user by username and role
    const user = await User.findOne({ username, role });
    
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const token = user.generateToken();

    // Return user data (without password) and token
    const userData = {
      id: user._id,
      username: user.username,
      role: user.role,
      name: user.name,
      rollNumber: user.rollNumber,
      balance: user.balance
    };

    res.json({
      success: true,
      token,
      user: userData
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/auth/me
// @desc    Get current user
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const userData = {
      id: req.user._id,
      username: req.user.username,
      role: req.user.role,
      name: req.user.name,
      rollNumber: req.user.rollNumber,
      balance: req.user.balance
    };

    res.json({ success: true, user: userData });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/auth/register
// @desc    Register user (for testing - remove in production)
// @access  Public
router.post('/register', async (req, res) => {
  try {
    const { username, password, role, name, rollNumber } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const user = new User({
      username,
      password,
      role,
      name,
      rollNumber: role === 'student' ? rollNumber : undefined
    });

    await user.save();

    // Generate token
    const token = user.generateToken();

    const userData = {
      id: user._id,
      username: user.username,
      role: user.role,
      name: user.name,
      rollNumber: user.rollNumber,
      balance: user.balance
    };

    res.status(201).json({
      success: true,
      token,
      user: userData
    });

  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;


