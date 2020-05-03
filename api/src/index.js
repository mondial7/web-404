const express = require('express');
const bodyParser = require('body-parser')
const routes = require('./routes/routes')
const DbConnection = require('./db/connection')

DbConnection()
const app = express();

server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')
  next()
})
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }))
app.use('/', routes);

app.listen(process.env.PORT);