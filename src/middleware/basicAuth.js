/**
 * @author Steve Aucapiña
 * 
 * Autenticacion basic base 64 para consumo del web-service
 * 
 */

const base64 = require('base-64');
const config = require('../config/config.js');

const authenticateUser = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Basic ')) {
    res.status(401).send('Unauthorized');
    return;
  }

  const encodedCredentials = authHeader.split(' ')[1];
  const decodedCredentials = base64.decode(encodedCredentials);
  const [username, password] = decodedCredentials.split(':');

  if (username === config.basicAuthUser && password === config.basicAuthPW) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

module.exports = authenticateUser;
