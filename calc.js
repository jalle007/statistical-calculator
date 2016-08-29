// statistical functions

function Sum(params) {
  console.log("params:" + params);
  if (params == "undefined") return 0;

 return params.reduce(function (a, b) { return parseInt(a, 10) + parseInt(b, 10); });
}

function Avg(params) {
  console.log("params:" + params);
  if (params == "undefined") return 0;
    var a = Sum(params) / params.length;
    return a;
  }

  function StdDev(values) {
    var avg = Avg(values);

    var squareDiffs = values.map(function(value) {
      var diff = value - avg;
      var sqrDiff = diff * diff;
      return sqrDiff;
    });

    var avgSquareDiff = Avg(squareDiffs);

    var stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
  }

module.exports.Sum = Sum;
module.exports.Avg = Avg;
module.exports.StdDev = StdDev;