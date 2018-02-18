var month = ["Week 1", "Week 2", "Week 3", "Week 4"];

var trace1 = {
  x: month,
  y: [13, 5, 11, 9],
  type: 'scatter'
};

var data = [trace1];

Plotly.newPlot('trend_co2', data);
