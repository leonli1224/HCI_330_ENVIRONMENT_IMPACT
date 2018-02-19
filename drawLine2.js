var month = ["Week 1", "Week 2", "Week 3", "Week 4"];

var trace1 = {
  x: month,
  y: [1300, 500, 1100, 900],
  type: 'scatter'
};

var layout = {
  title:"This Month's CO2 Production",
  yaxis:{
    title:'Kilograms'
  }
};

var data = [trace1];

Plotly.newPlot('trend_co2', data, layout, {displayModeBar: false});
