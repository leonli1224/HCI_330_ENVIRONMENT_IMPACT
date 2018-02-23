var data = [{
  values: [19, 20, 6, 20, 30],
  labels: ['Cooking', 'Shower', 'Cleaning', 'Drinking', 'misc'],
  type: 'pie'
}];

var layout = {
  height: 400,
  width: 500,
  title:'How Do I Use Water? My Overall Water Trend',
  titlefont:{
    family: 'Avenir, sans-serif',
    size: 18
  },
  legend: {
    x: 1,
    y: 1,
    font:{
      family: 'Avenir, sans-serif',
      size: 14
    }
  }
};

Plotly.newPlot('pie_water', data, layout, {displayModeBar: false});
