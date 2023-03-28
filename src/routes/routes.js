const express = require('express');
const router = express.Router();
const smsController = require('../controllers/smsController');

router.post('/sms/send', smsController.sendSms); 

module.exports = router;
