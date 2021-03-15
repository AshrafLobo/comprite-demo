const express = require('express');
const winston = require('winston');

/** Declare app variable */
const app = express();

/** Load routes */
require('./startup/logging')(app);
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();

/** Start server */
const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`))