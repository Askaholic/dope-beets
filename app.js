var bluebird = require('bluebird');
var express = require('express');
var mongoose = require('mongoose');

const SERVER_URL = 'http://localhost:4200'

var app = express();

mongoose.Promise = bluebird;
mongoose.connect('mongodb://127.0.0.1:27017/dopebeets')
    .then(() => {
        console.log('Successfully connected to database');
    })
    .catch(() => {
        console.log('Could not connect to database!');
    })

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", SERVER_URL);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err: {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
