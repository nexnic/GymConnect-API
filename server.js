// Import list

// Mongoose
const mongoose = require('mongoose');

// Dotenv
const dotenv = require('dotenv');

// Route to the config.env file
dotenv.config({ path: './secret.env' });

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = process.env.PORT || 4000;
