var data = [{
  values: [19, 26, 55],
  labels: ['Transportation', 'Products', 'misc'],
  type: 'pie'
}];

var layout = {
  height: 400,
  width: 500,
  title:'How Do I Product CO2? My Overall CO2 Trend',
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

Plotly.newPlot('pie_co2', data, layout, {displayModeBar: false});
