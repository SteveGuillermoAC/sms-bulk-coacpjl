const database = require('../../src/database/database.js');
async function testDBConnection() {
    const connection = await database.connect();

  try {
   const result = await connection.execute("SELECT nombrelegal from tpersona where rownum=1");
    console.log('Result: ', result);
  } catch (error) {
    console.log('Error al ejecutar la consulta', error);
  } finally {
    await connection.close();
  }
}
testDBConnection();
