/***
 * 
 * insercion de datos en TLOGNOTIFICACIONES
 * 
 */

const { connect } = require('../database/database');

async function insertSmsNotification(id_transaccion, telefono, mensaje) {
  try {
    const connection = await connect();
    const query = `INSERT INTO tlognotificaciones (numeromensaje, snotificacion, cmedionotificacion, FNOTIFICACION,
        ASUNTO, MENSAJE, ESTADO, TRAMAENVIO, CPERSONA, CUSUARIO, CPERSONA_COMPANIA, CCUENTA, DESTINO, CSUBSISTEMA,
        CTRANSACCION, VERSIONTRANSACCION) 
     VALUES (${id_transaccion}, ${telefono}, ${mensaje},'SMS')`;
    const result = await connection.execute(query, [id_transaccion, telefono, mensaje]);
    console.log(`Se ha insertado correctamente la notificación con ID_TRANSACCION ${id_transaccion}`);
  } catch (error) {
    console.error('Error al insertar la notificación en la base de datos', error);
  }
}

module.exports = {
  insertSmsNotification
};

/***
numeromensaje =id_transaccion
snotificacion =2
cmedionotificacion=SMS
FNOTIFICACION =FECHA Y HORA
ASUNTO =URL
MENSAJE = MENSAJE
ESTADO = ENV (SI ES ENVIADO)
TRAMAENVIO = URL
CPERSONA = CPERSONA PERSONATRANSACCION
CUSUARIO = EN CASO DE HABERLO
CPERSONA_COMPANIA= 2 
CCUENTA=EN CASO DE HABERLO
DESTINO = TELEFONO DESTINO DEL SMS
CSUBSISTEMA = EL CORRESPONDIENTE
CTRANSACCION = EL CORRESPONDIENTE
VERSIONTRANSACCION = VERSION DE LA TRANSACCION QUE GENERA LA NOTIFICACION
 */