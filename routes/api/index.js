// API Declaration
// use Postman for testing

"use strict";
var calc = require('../../calc.js');

function sum(req, res) {
  var lstSelect = req.body.lstSelect;
  var result = calc.Sum(lstSelect);
  res.status(200).send(result.toString());
}
exports.sum = sum;
;

function avg(req, res) {
  var lstSelect = req.body.lstSelect;
  var result = calc.Avg(lstSelect);
  res.status(200).send(result.toString());
}
exports.avg = avg;
;

function stddev(req, res) {
  var lstSelect = req.body.lstSelect;
  var result = calc.StdDev(lstSelect);
  res.status(200).send(result.toString());
}
exports.stddev = stddev;
;
 
//# sourceMappingURL=index.js.map