/**
 * @author Steve Aucapiña
 * 
 * Configuracion global desde variables de entorno
 * 
 */

const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

module.exports = {
  username: process.env.API_USERNAME,
  password: process.env.API_PASSWORD,
  apiUrl: process.env.API_URL,
  dbbuser: process.env.USERBD,
  dbbpassword: process.env.USERBDPW,
  dbbconnectString: process.env.CONNECTIONBD,
  basicAuthUser: process.env.BAUTHSMSCOACPJLUSER,
  basicAuthPW: process.env.BAUTHSMSCOACPJLPW,
};

