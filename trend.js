var day = ["9am", "10am", "11am", "12am","1pm","2pm","3pm","4pm","5pm"];
var week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var month = ["Week 1", "Week 2", "Week 3", "Week 4"];

var monthData = [1000, 1500, 1300, 1700];
var dayData = [6,3,4,2,7,8,9];
var weekData = [120,130,170,110,90];

var co2monthData = [1300, 500, 1100, 900];
var co2dayData = [5,4,3,1,4,9,7];
var co2weekData = [140,120,110,150,170];


function setXtoDay() {
	var trace1 = {
  		x: day,
  		y: dayData,
  		type: 'scatter'
	};

	var layout = {
	  title:"Today's Water Usage",
	  yaxis:{
	    title:'Liters'
	  }
	};

	var data = [trace1];
	Plotly.newPlot('trend_water', data,layout);
}

function setXtoWeek() {
	var trace1 = {
  		x: week,
  		y: weekData,
  		type: 'scatter'
	};

	var layout = {
	  title:"This Week's Water Usage",
	  yaxis:{
	    title:'Liters'
	  }
	};

	var data = [trace1];
	Plotly.newPlot('trend_water', data,layout);
}

function setXtoMonth() {
	var trace1 = {
  		x: month,
  		y: monthData,
  		type: 'scatter'
	};

	var layout = {
	  title:"This Month's Water Usage",
	  yaxis:{
	    title:'Liters'
	  }
	};

	var data = [trace1];
	Plotly.newPlot('trend_water', data,layout);
}
// var trace1 = {
//   x: month,
//   y: [10, 15, 13, 17],
//   type: 'scatter'
// };


// var data = [trace1];

// Plotly.newPlot('trend_water', data);


// ----------------------Chester update------------------ //
function setco2XtoDay() {
	var trace1 = {
  		x: day,
  		y: co2dayData,
  		type: 'scatter'
	};

	var layout = {
	  title:"Today's CO2 Production",
	  yaxis:{
	    title:'Kilograms'
	  }
	};

	var data = [trace1];
	Plotly.newPlot('trend_co2', data, layout);
}

function setco2XtoWeek() {
	var trace1 = {
  		x: week,
  		y: co2weekData,
  		type: 'scatter'
	};

	var layout = {
	  title:"This Week's CO2 Production",
	  yaxis:{
	    title:'Kilograms'
	  }
	};

	var data = [trace1];
	Plotly.newPlot('trend_co2', data, layout);
}

function setco2XtoMonth() {
	var trace1 = {
  		x: month,
  		y: co2monthData,
  		type: 'scatter'
	};

	var layout = {
	  title:"This Month's CO2 Production",
	  yaxis:{
	    title:'Kilograms'
	  }
	};

	var data = [trace1];
	Plotly.newPlot('trend_co2', data,layout);
}


// Plotly.newPlot('trend_co2', data);
