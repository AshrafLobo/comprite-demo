const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');

module.exports = function () {
  /** Handle Uncaught Promise and Synchronous Exceptions */
  winston.exceptions.handle(new winston.transports.File({ filename: 'uncaughtExceptions.log' }));

  // Create winston transport
  winston.add(new winston.transports.File({
    filename: 'logfile.log',
    handleRejections: true
  }));

  winston.add(new winston.transports.Console({
    handleRejections: true
  }));

  winston.add(new winston.transports.MongoDB({
    db: 'mongodb://localhost/comprite',
    handleRejections: true,
    options: { useUnifiedTopology: true }
  }));
}