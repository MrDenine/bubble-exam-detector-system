const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();

app.listen(3001, function () {
  console.info('[SERVER] Listening on port 3001');

  app.use(cookieParser());
  app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: true,
  }));

  // Static File
  app.use(express.static('public'));
  app.use('/', express.static(__dirname));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // Set Views engine
  app.set('views', './screens');
  app.set('view engine', 'ejs');

  // Setup Routes
  var route = require('./routes/route');

  // Initial Routes
  app.use('/', route);
});

module.exports = app;