const https = require('https');
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
require('dotenv').config();

app.use(express.json());

const routes = require('../src/routes/routes.js');

app.use('/api', routes);

const privateKey = fs.readFileSync(path.join(__dirname, '../key.pem'), 'utf8');
const certificate = fs.readFileSync(path.join(__dirname,  '../cert.pem'), 'utf8');

const credentials = { key: privateKey, cert: certificate };

const httpsServer = https.createServer(credentials, app);

const port = process.env.PORT ||3000;

httpsServer.listen(port, () => {
  console.log(`Servidor HTTPS escuchando en el puerto ${port}`);
});
