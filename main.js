

var data = [{
  values: [19, 20, 6, 20, 30],
  labels: ['Cookinng', 'Shower', 'Cleaning', 'Drinking', 'misc'],
  type: 'pie'
}];

Plotly.newPlot('pie_water', data);

var data = [{
  values: [19, 26, 55],
  labels: ['Transportation', 'Products', 'misc'],
  type: 'pie'
}];

Plotly.newPlot('pie_co2', data);