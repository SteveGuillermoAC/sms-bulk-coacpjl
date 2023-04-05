// Importar el módulo de base de datos
const db = require('../db/database.js');

async function insertSmsNotification(id_transaccion, numeromensaje) {
  const query = `
    INSERT INTO tlognotificaciones (numeromensaje, cmedionotificacion, fnotificacion, asunto, mensaje, estado, tramaenvio, tramarespuesta, cpersona, cusuario, cpersona_compania, ccuenta, destino, csubsistema, ctransaccion, versiontransaccion, id_transaccion)
    VALUES (:numeromensaje, 'SMS', SYSDATE, 'Notificación de SMS', 'Mensaje de prueba', 'pnd', null, null, null, null, null, null, '5555555', '01', '001', '01', :id_transaccion)
  `;

  try {
    const result = await db.runQuery(query, { numeromensaje, id_transaccion });
    console.log(`Se insertó la notificación de SMS con ID_TRANSACCION=${id_transaccion}`);
  } catch (error) {
    console.error(`Error al insertar la notificación de SMS con ID_TRANSACCION=${id_transaccion}:`, error.message);
    throw error;
  }
}

module.exports = {
  insertSmsNotification,
};
