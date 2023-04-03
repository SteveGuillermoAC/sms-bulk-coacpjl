const axios = require('axios');
const config = require('../config/config.js');

exports.sendSms = async (req, res) => {
  try {
    const data = {
      metodo: 'SmsEnvio',
      id_cbm: '1100',
      id_transaccion: req.body.id_transaccion,
      telefono: req.body.telefono,
      id_mensaje: req.body.id_mensaje,
      dt_variable: req.body.dt_variable,
      datos: req.body.datos,
      short_url: req.body.short_url || 0,
      flash_sms: req.body.flash_sms || 0,
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
exports.consultaTransaccion = async (req, res) => {
  try {
    // Extraer el id_transaccion de la solicitud
    const { id_transaccion } = req.body;

    // Construir la estructura de datos para la consulta
    const data = {
      metodo: 'ConsultaEstadoTransaccion',
      id_cbm: '1100',
      id_transaccion,
    };

    // Configurar la autenticación y las cabeceras
    const auth = Buffer.from(`${config.username}:${config.password}`).toString('base64');
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Basic ${auth}`,
    };

    // Realizar la consulta al API
    console.log('Consultando estado de transacción...');
    const response = await axios.post(config.apiUrl, data, { headers });
    console.log('Respuesta del API:', response.data);

    // Enviar la respuesta al cliente
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error al consultar el estado de la transacción:', error.message);
    res.status(500).json({ message: 'Error al consultar el estado de la transacción', error: error.message });
  }
};
