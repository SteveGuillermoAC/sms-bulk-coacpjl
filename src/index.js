const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();
const path = require('path');

// Importar rutas
const routes = require('./routes/routes');

//Configuración de middleware y rutas
app.use('/', routes);

const port = process.env.PORT || 3000;

const sslOptions = {
  key: fs.readFileSync(path.join(__dirname, '../certificates/key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '../certificates/cert.pem'))
};

https.createServer(sslOptions, app).listen(port, () => {
  console.log(`Servidor HTTPS escuchando en el puerto ${port}`);
});
