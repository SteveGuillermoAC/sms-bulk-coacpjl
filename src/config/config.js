require('dotenv').config();

module.exports = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  apiUrl: process.env.API_URL,
  dbuser: process.env.DB_USER,
  dbpassword: procces.env.DB_PASSWORD,
  dbconnection:procces.env.DB_CONNECTION_STRING
};
