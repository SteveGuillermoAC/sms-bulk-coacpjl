const { runQuery } = require('./database.js');
async function getSmsData(id_transaccion) {
  try {
    const query = `
      SELECT id_mensaje, dt_variable, datos
      FROM mensajes_aprobados
      WHERE id_transaccion = :id_transaccion
    `;
    const result = await runQuery(query, { id_transaccion });

    // Cambia "result.rows.length" a "result.length"
    if (result.length > 0) {
      const row = result[0]; // Cambia "result.rows[0]" a "result[0]"
      const smsData = {
        id_mensaje: row.ID_MENSAJE,
        dt_variable: row.DT_VARIABLE,
        datos: JSON.parse(row.DATOS), // Asegurar que los datos se encuentren en la base de datos
      };
      return smsData;
    } else {
      throw new Error('No se encontró la transacción en la base de datos');
    }
  } catch (error) {
    console.error('Error al obtener datos de SMS:', error.message);
    throw error;
  }
}

module.exports = {
  getSmsData,
};
