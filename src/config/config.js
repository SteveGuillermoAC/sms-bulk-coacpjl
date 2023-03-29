require('dotenv').config();

module.exports = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  apiUrl: process.env.API_URL,
  dbuser: process.env.DB_USER,
  dbpassword: process.env.DB_PASSWORD,
  dbconnection: process.env.DB_CONNECTION_STRING,
  keyPassphrase: process.env.KEY_PASSPHRASE,

};

