const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


app.use(express.urlencoded({ extended: true }));

app.listen(3000, function () {
  console.info('[SERVER] Listening on port 3000');

  app.use(upload.single('image'));
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
  app.use(bodyParser.urlencoded({ extended: true }));

  // Set Views engine
  app.set('views', './screens');
  app.set('view engine', 'ejs');
  

  // Setup Routes
  var route = require('./routes/route');

  // Initial Routes
  app.use('/', route);
});

module.exports = app;