const express = require('express');
const app = express();
const path = require('path');
const config = require('./config/config');

// Habilitar el middleware para analizar el cuerpo JSON
app.use(express.json());

// Importar rutas
const routes = require('../src/routes/routes.js');

// Configuración de middleware y rutas
app.use('/api', routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor HTTP escuchando en el puerto ${port}`);
});