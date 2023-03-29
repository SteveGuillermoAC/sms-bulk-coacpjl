const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();
const path = require('path');
const config = require('./config/config');


// Importar rutas
const routes = require('../src/routes/routes.js');

//Configuración de middleware y rutas
app.use('/api', routes);
const port = process.env.PORT || 3000;

const sslOptions = {
  key: fs.readFileSync(path.join(__dirname, '../certificates/key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '../certificates/cert.pem')),

  // deveinotherpc
  passphrase: config.keyPassphrase

};

https.createServer(sslOptions, app).listen(port, () => {
  console.log(`Servidor HTTPS escuchando en el puerto ${port}`);
});
