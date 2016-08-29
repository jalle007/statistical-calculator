//"use strict";
var express = require('express');
var routes = require('./routes/api/index');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var calc = require('./calc.js');

var cfg = require('./config.js');

//var cons = require('consolidate');
//app.engine('html', cons.swig);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

 
  
app.post('/calc', function (req, res, next) {
  var lstSelect = req.body.lstSelect;
 // lstSelect = ["60.258", "51.786", "28.397", "31.978", "52.191"];
  console.log("lstSelect2:" + lstSelect);

    var result ="";
    if (req.body.Sum) {
      result = calc.Sum(lstSelect);
      result = "Sum is : " + result;
    }
    if (req.body.Avg) {
      result = calc.Avg(lstSelect);
      result = "Avg is : " + result;
    }
    if (req.body.StdDev) {
      result = calc.StdDev(lstSelect);
      result = "StdDev is : " + result;
    }
    console.log("result:" + result);
  res.render('index', { result: result });
});

 
app.get('/', function (req, res) {
  res.render('index');
});

//API routes
app.post('/api/sum', routes.sum);
app.post('/api/avg', routes.avg);
app.post('/api/stddev', routes.stddev);

module.exports = app;

