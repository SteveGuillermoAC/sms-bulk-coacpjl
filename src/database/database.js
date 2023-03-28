const oracledb = require('oracledb');
const config = require('../config/config.js');

const config = {
  user: config.dbuser,
  password: config.dbpassword,
  connectString: config.dbconnection,
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

module.exports = {
  runQuery,
};
