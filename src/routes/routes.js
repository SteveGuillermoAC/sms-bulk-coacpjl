/**
 * @author Steve Aucapiña
 * 
 * Rutas de envio de sms y consulta estado de la transaccion respectiva
 * 
 */

const express = require('express');
const router = express.Router();
const smsController = require('../controllers/smsController');
const authenticateUser = require('../middleware/basicAuth.js');

router.post('/sms/send', authenticateUser, smsController.sendSms); 
router.post('/sms/consulta-transaccion', authenticateUser, (req, res) => {
  smsController.consultarEstadoTransaccion(req, res);
});

module.exports = router;
