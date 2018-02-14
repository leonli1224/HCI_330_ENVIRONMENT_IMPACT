var data = [{
  values: [19, 26, 55],
  labels: ['Transportation', 'Products', 'misc'],
  type: 'pie'
}];

var layout = {
  title:'How Do I Make CO2?'
};

Plotly.newPlot('pie_co2', data, layout);