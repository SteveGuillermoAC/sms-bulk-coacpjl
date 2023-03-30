const axios = require('axios');
const config = require('../config/config.js');
const { getSmsData } = require('../database/smsData');

exports.sendSms = async (req, res) => {
  try {
    const smsData = await getSmsData(req.body.id_transaccion);

    const data = {
      metodo: 'SmsEnvio',
      id_cbm: '1', 
      id_transaccion: req.body.id_transaccion,
      telefono: req.body.telefono,
      id_mensaje: smsData.id_mensaje,
      dt_variable: smsData.dt_variable,
      datos: smsData.datos,
      short_url: req.body.short_url || 0,
      fecha: req.body.fecha || null,
      hora: req.body.hora || null,
    };

    console.log('Datos enviados:', data);

    const auth = Buffer.from(`${config.username}:${config.password}`).toString('base64');

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Basic ${auth}`,
    };

    console.log('Enviando SMS...');
    const response = await axios.post(config.apiUrl, data, { headers });
    console.log('Respuesta del API:', response.data);

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error al enviar el SMS:', error.message);
    res.status(500).json({ message: 'Error al enviar el SMS', error: error.message });
  }
};
