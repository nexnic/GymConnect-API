// Import list

// Mongoose
const mongoose = require('mongoose');

// Dotenv
const dotenv = require('dotenv');

// Route to the config.env file
dotenv.config({ path: './secret.env' });

const app = require('./app');

mongoose.connect(process.env.DATABASE).then(() => {
  console.log('DB connection succesfull!');
});

const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
