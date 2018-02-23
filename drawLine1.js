var month = ["Week 1", "Week 2", "Week 3", "Week 4"];

var trace1 = {
  x: month,
  y: [1000, 1500, 1300, 1700],
  type: 'scatter'
};

var layout = {
  title:"This Month's Water Usage",
  yaxis:{
    title:'Liters'
  },
  titlefont:{
    family: 'Avenir, sans-serif',
    size: 18
  },
};

var data = [trace1];

Plotly.newPlot('trend_water', data, layout,{displayModeBar: false});
