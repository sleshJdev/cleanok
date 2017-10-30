const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// const favicon require('serve-favicon');
const path = require('path');
const appConfig = require('./config/app.config');
const HttpError = require('./errors/http-error');

const app = express();

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./filters/authenticate'));
app.use('/', require('./routes/index'));
app.use('/api/sign-in', require('./routes/sign-in'));
app.use('/api/sign-up', require('./routes/sign-up'));
app.use('/api/users', require('./routes/users'));

app.use((req, res, next) => {
  next(new HttpError('Not Found', 404));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;
