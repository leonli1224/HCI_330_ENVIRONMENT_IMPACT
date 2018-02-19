var data = [{
  values: [19, 20, 6, 20, 30],
  labels: ['Cooking', 'Shower', 'Cleaning', 'Drinking', 'misc'],
  type: 'pie'
}];

var layout = {
  title:'How Do I Use Water?'
};

Plotly.newPlot('pie_water', data, layout, {displayModeBar: false});
