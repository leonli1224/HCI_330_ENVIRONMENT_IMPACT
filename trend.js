var day = ["9am", "10am", "11am", "12am","1pm","2pm","3pm","4pm","5pm"];
var week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var month = ["Week1", "Week2", "Week3", "Week4", "Week5"];

var monthData = [20, 25, 33, 27];
var dayData = [6,3,4,2,7,8,9];
var weekData = [12,13,17,11,9];

var co2monthData = [13, 5, 11, 9];
var co2dayData = [5,4,3,1,4,9,7];
var co2weekData = [14,12,11,15,17];


function setXtoDay() {
	var trace1 = {
  		x: day,
  		y: dayData,
  		type: 'scatter'
	};
	var data = [trace1];
	Plotly.newPlot('trend_water', data);
}

function setXtoWeek() {
	var trace1 = {
  		x: week,
  		y: weekData,
  		type: 'scatter'
	};
	var data = [trace1];
	Plotly.newPlot('trend_water', data);
}

function setXtoMonth() {
	var trace1 = {
  		x: month,
  		y: monthData,
  		type: 'scatter'
	};
	var data = [trace1];
	Plotly.newPlot('trend_water', data);
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
	var data = [trace1];
	Plotly.newPlot('trend_co2', data);
}

function setco2XtoWeek() {
	var trace1 = {
  		x: week,
  		y: co2weekData,
  		type: 'scatter'
	};
	var data = [trace1];
	Plotly.newPlot('trend_co2', data);
}

function setco2XtoMonth() {
	var trace1 = {
  		x: month,
  		y: co2monthData,
  		type: 'scatter'
	};
	var data = [trace1];
	Plotly.newPlot('trend_co2', data);
}


// Plotly.newPlot('trend_co2', data);
