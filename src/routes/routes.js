const express = require('express');
const router = express.Router();
const smsController = require('../controllers/smsController');

router.post('/sms/send', smsController.sendSms); 
router.post('/consulta-transaccion', smsController.consultaTransaccion);


module.exports = router;
