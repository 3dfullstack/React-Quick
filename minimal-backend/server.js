var createError = require('http-errors');
var express = require('express');
var path = require('path');
var helmet = require("helmet");
var compression = require("compression");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')
var centralRouter = require('./routes/index');
var morgan = require("morgan")
var cors = require('cors')

// Express App Init
var app = express();

// Security Middlewares
app.use(morgan("common"));
app.use(helmet());

// Cors Headers. Not in production !!
app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routers 
app.use('/', centralRouter);

// Other Express Middlewares.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(req, res, next) {
  next(createError(401));
});

app.use(function(req, res, next) {
  next(createError(402));
});

app.use(function(req, res, next) {
  next(createError(403));
});

app.use(function(req, res, next) {
  next(createError(501));
});

app.use(function(req, res, next) {
  next(createError(502));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

