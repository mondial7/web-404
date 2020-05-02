const express = require('express');
const bodyParser= require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

// List Up-to-date metrics
app.get('/', (req, res) => {
  res.json({
    clicks: 99,
    status: 'on',
    lastOff: new Date(),
  });
});

app.route('/light')
  .get((req, res) => {
    // Get light status
    res.json({
      status: 'on',
    });
  })
  .post((req, res) => {
    // validate params and update status
    // ...
    res.send('');
  });

app.listen(3000);