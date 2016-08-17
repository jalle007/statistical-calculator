var assert = require('assert');
var calc = require('./calc.js');

describe('Test calculator',
  function() {
    var array = ["60.258", "51.786", "28.397", "31.978", "52.191"];

    it('Sum test',
      function() {
        var res = calc.Sum(array); //222

        assert.ok(res== 222, "This should pass");
      });

    it('Avg test',
      function() {
        var res = calc.Avg(array); //44.4
        assert.ok(res== 44.4,"This should pass");

      });

    it('StdDev test',
      function () {
        var res = calc.StdDev(array); //12.449899597988733
        console.log(res);

        assert.ok(res == 12.449899597988733, "This should pass");

      });
  });
