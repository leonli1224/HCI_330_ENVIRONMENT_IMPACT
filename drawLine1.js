var month = ["Jan", "Feb", "Mar", "Apr"];

var trace1 = {
  x: month,
  y: [10, 15, 13, 17],
  type: 'scatter'
};


var data = [trace1];

Plotly.newPlot('trend_water', data);