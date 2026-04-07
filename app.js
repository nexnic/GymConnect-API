// 1) Import List
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Importing Routes
const userRoutes = require('./routes/userRoute');
const memberRoutes = require('./routes/memberRoutes');
const productRoutes = require('./routes/productRoutes');
const PTSessionRoutes = require('./routes/PTSessionRoutes');
const saleRoutes = require('./routes/saleRoutes');
const shiftRoutes = require('./routes/shiftRoutes');
const staffRoutes = require('./routes/staffRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();

// 2 ) Middelware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/members', memberRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/ptsessions', PTSessionRoutes);
app.use('/api/v1/sales', saleRoutes);
app.use('/api/v1/shifts', shiftRoutes);
app.use('/api/v1/staff', staffRoutes);
app.use('/api/v1/transactions', transactionRoutes);

// 3) Routes
app.use('/api/v1', (req, res) => {
  res.json({ status: 'fail', message: 'API root is alive' });
});

module.exports = app;
