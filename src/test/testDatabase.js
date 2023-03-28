
const { runQuery } = require('../database/database.js');

async function testDatabaseConnection() {
  try {
    console.log('Probando conexión a la base de datos...');
    const queryResult = await runQuery('SELECT 1 FROM DUAL', {});
    console.log('Resultado de la consulta:', queryResult);
    console.log('Conexión a la base de datos exitosa.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
  }
}

testDatabaseConnection();
