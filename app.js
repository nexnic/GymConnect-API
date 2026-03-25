// 1) Import List
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

// 2 ) Middelware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/v1', (req, res) => {
  res.json({ status: 'fail', message: 'API root is alive' });
});

module.exports = app;
