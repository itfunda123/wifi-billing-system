// backend/routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const { stkPush, handleCallback } = require('../controllers/paymentController');

router.post('/stk-push', stkPush);
router.post('/callback', handleCallback); // Safaricom hits this

module.exports = router;
