/**
 * Imports 
 */
const express = require('express');
const mongoose = require('mongoose');
const mongoDbDebug = require('debug')('app:mongoDbDebug');

// Route imports
const issuers = require('./routes/issuers');

// Declare app
const app = express();

/**
 * Middleware
 */
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/comprite', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
  .then(() => console.log("Connected to MongoDB..."))
  .catch(error => mongoDbDebug("Could not connect to MongoDB...\n", error));

// Routes 
app.use('/api/issuers', issuers);

/**
 * Start server
 */
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))