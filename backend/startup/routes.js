// Npm imports
const express = require('express');
const cors = require('cors');

// Route imports
const issuers = require('../routes/issuers');
const news = require('../routes/news');
const timelines = require('../routes/timelines');
const agms = require('../routes/agms');
const egms = require('../routes/egms');
const dividends = require('../routes/dividends');
const users = require('../routes/users');
const auth = require('../routes/auth');

// Forms imports
const payroll_forms = require('../routes/payroll-forms');

// Middleware imports
const error = require('../middleware/error');

module.exports = function (app) {
  /** Middleware - Before Route Call */
  app.use(express.json());
  app.use(cors());

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

  /** Middleware - After Route Call */
  app.use(error)
}