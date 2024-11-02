const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Ensure you have a User model
const bcrypt = require('bcrypt'); // If you're using password hashing

// Admin credentials
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin';

// Regular expressions for validation
const usernameRegex = /^[a-zA-Z0-9]+$/; // Only allows letters and numbers
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // Example: At least 8 characters, 1 uppercase, 1 lowercase, 1 number

// Middleware to validate login input
const validateLoginInput = (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username and password are required' });
    }

    // Validate username format
    if (!usernameRegex.test(username)) {
        return res.status(400).json({ success: false, message: 'Username can only contain letters and numbers' });
    }

    // Validate password complexity
    if (!passwordRegex.test(password)) {
        return res.status(400).json({ success: false, message: 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number' });
    }

    next(); // Proceed to the next middleware or route handler
};

// Login endpoint to validate username and password
router.post('/login', validateLoginInput, async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check for admin credentials
        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            return res.json({ success: true }); // Login successful for admin
        }

        // For other users, implement actual database validation
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        // Compare provided password with the stored password (hashed)
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        // If successful
        return res.json({ success: true, message: 'Login successful' });

    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports = router;
