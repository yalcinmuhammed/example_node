var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require("winston");
var SystemError = require("./errors/system.error");
var middleware = require('./helpers/middleware');
var expressValidator = require("express-validator");
//Env settings
require("./config");
// Mongodb Connection
require('./connections/mongodb.connection');

var RecordRoute = require('./routes/record.route');

var app = express();
//CORS Settings
app.use(middleware.CORS);
app.use(expressValidator());
app.use(require('morgan')("combined", {"stream": logger.stream.write}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//route configuration
app.use("/doc",express.static('doc'));
app.get('/healthcheck', function(req,res,next) {
  res.status(200).send();
});
app.use('/api/v1/', RecordRoute);

//catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new SystemError.ServiceNotFound();
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  if (!err.status || err.status == 500) {
    logger.error("APIException: " + err.message || err.msg);
    err = new SystemError.APIException();
  }

  res.status(err.status || 500);

  res.json({
      code: err.error_code || err.code,
      msg: err.msg
  });
});

module.exports = app;