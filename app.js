const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// This will be our application entry. We'll setup our server here.
const http = require('http');

// Set up the express app
const app = express();
app.use(logger('dev'));  // Log requests to the console.
app.use(bodyParser.json());  // Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.urlencoded({ extended: false }));

// Models
const models = require('./models');

// Sync MySQL Database
models.sequelize
      .sync()
      .then(() => console.log('Database is okay'))
      .catch(err => console.log(err, "Problem with database sync"));

// Require routes into the app
require('./server/routes')(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);

module.exports = app;