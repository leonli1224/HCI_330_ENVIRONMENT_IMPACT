var data = [{
  values: [19, 20, 6, 20, 30],
  labels: ['Cookinng', 'Shower', 'Cleaning', 'Drinking', 'misc'],
  type: 'pie'
}];

var layout = {
  title:'How Do I Use Water?'
};

Plotly.newPlot('pie_water', data, layout);