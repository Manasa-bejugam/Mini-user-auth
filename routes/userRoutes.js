const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// @route   GET /api/user/profile
// @desc    Get user profile (protected route example)
// @access  Private
router.get('/profile', authMiddleware, async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: 'Profile retrieved successfully',
            data: {
                user: req.user
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve profile',
            error: error.message
        });
    }
});

module.exports = router;
