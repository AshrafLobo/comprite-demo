/**
 * Imports
 */

// Npm Packages
const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const mongoDbDebug = require('debug')('app:mongoDbDebug');
const cors = require('cors');

// Route imports
const issuers = require('./routes/issuers');
const news = require('./routes/news');
const timelines = require('./routes/timelines');
const agms = require('./routes/agms');
const egms = require('./routes/egms');
const dividends = require('./routes/dividends');
const users = require('./routes/users');
const auth = require('./routes/auth');

// Forms imports
const payroll_forms = require('./routes/payroll-forms');

/** Declare app variable */
const app = express();

/**
 * Middleware
 */
app.use(express.json());
app.use(cors());

/** Check if jwtPrivateKey is set */
if (!config.get('jwtPrivateKey')) {
  console.log('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}

/** Connect to MongoDB */
mongoose.connect('mongodb://localhost/comprite', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
  .then(() => console.log("Connected to MongoDB..."))
  .catch(error => mongoDbDebug("Could not connect to MongoDB...\n", error));

/** API Routes Mapping */
app.use('/api/issuers', issuers);
app.use('/api/news', news);
app.use('/api/timelines', timelines);
app.use('/api/agms', agms);
app.use('/api/egms', egms);
app.use('/api/dividends', dividends);
app.use('/api/users', users);
app.use('/api/auth', auth);

/** Forms API Routes Mapping */
app.use('/api/payroll-forms', payroll_forms);

/**
 * Start server
 */
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))