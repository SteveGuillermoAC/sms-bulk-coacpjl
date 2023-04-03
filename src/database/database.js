const oracledb = require('oracledb');
const dbConfig = require('../config/config.js');

const config = {
  user: dbConfig.dbuser,
  password: dbConfig.dbpassword,
  connectString: dbConfig.dbconnection,
};

async function runQuery(query, params) {
  let connection;

  try {
    console.log('Conectando a la base de datos Oracle...');
    connection = await oracledb.getConnection(config);
    console.log('Conexión exitosa.');

    console.log(`Ejecutando consulta: ${query}`);
    const result = await connection.execute(query, params, {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });
    console.log('Consulta ejecutada con éxito.');

    return result.rows;
  } catch (err) {
    console.error('Error al ejecutar la consulta:', err);
  } finally {
    if (connection) {
      try {
        console.log('Cerrando la conexión a la base de datos...');
        await connection.close();
        console.log('Conexión cerrada.');
      } catch (err) {
        console.error('Error al cerrar la conexión:', err);
      }
    }
  }
}
async function insertSentMessage(data) {
  try {
    const query = `
      INSERT INTO mensajes_enviados (id_transaccion, telefono, id_mensaje, dt_variable, datos, short_url, fecha, hora)
      VALUES (:id_transaccion, :telefono, :id_mensaje, :dt_variable, :datos, :short_url, :fecha, :hora)
    `;

    await runQuery(query, data);
    console.log('Mensaje enviado registrado en la base de datos.');
  } catch (error) {
    console.error('Error al registrar el mensaje enviado:', error.message);
    throw error;
  }
}

module.exports = {
  runQuery,
  insertSentMessage,
};