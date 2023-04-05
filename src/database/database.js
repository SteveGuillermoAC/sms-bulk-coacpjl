const oracledb = require('oracledb');
const config = require('../config/config.js');


async function connect() {
  try {
    const connection = await oracledb.getConnection({
      user:  config.dbbuser,
      password: config.dbbpassword,
      connectString: config.dbbconnectString,
    });

    console.log('Conexion establecida con la base de datos ORACLE');

    return connection;
  } catch (error) {
    console.error('Error al conectarse a la base de datos ORACLE', error);
  }
}

module.exports = {
  connect
};