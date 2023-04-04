const express = require('express');
const router = express.Router();
const smsController = require('../controllers/smsController');


router.post('/sms/send', smsController.sendSms); 
router.post('/sms/consulta-transaccion', (req, res) => {
    smsController.consultarEstadoTransaccion(req, res);
  });

module.exports = router;
