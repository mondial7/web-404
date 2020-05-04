require('dotenv').config()

module.exports = {
  mongo: process.env.MONGO,
  port: process.env.PORT,
  webappHost: process.env.WEBAPP_HOST,
};