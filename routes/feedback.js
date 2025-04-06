const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { createFeedback, getFeedbacks } = require('../controllers/feedbackController');

// Validation & POST
router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').notEmpty().withMessage('Message is required'),
    body('rating').optional().isInt({ min: 1, max: 5 }).withMessage('Rating must be 1-5'),
  ],
  createFeedback
);

// GET all feedback
router.get('/', getFeedbacks);

module.exports = router;
