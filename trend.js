var day = ["9am", "10am", "11am", "12am","1pm","2pm","3pm","4pm","5pm"];
var week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var month = ["Week 1", "Week 2", "Week 3", "Week 4"];

var monthData = [[1000, 1500, 1300, 1700],[1800, 1100, 2000, 900]];
var dayData = [[6, 3, 4, 2, 7, 8, 9],[9, 8, 1, 2, 4, 10,1]];
var weekData = [[120,130,170,110], [80,120,180, 110]];

var co2monthData = [[1300, 500, 1100, 900], [2000,900, 200,600]];
var co2dayData = [[5,4,3,1,4,9,7], [3,1,4,1,5,8,1]];
var co2weekData = [[140,120,110,150,170], [80, 200, 100, 90, 110]];
var pieData = [[19, 20, 6, 20, 30], [10, 30, 19, 21, 10]];
var co2pieData = [[19, 26, 55], [33,33,34]];
var index = (parseInt(sessionStorage.getItem('userState')) - 1) < 0 ? 0 : parseInt(sessionStorage.getItem('userState')) - 1;

function setXtoDay() {
	var trace1 = {
  		x: day,
  		y: dayData[index],
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
  		y: weekData[index],
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
  		y: monthData[index],
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
  		y: co2dayData[index],
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
  		y: co2weekData[index],
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
  		y: co2monthData[index],
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


//initial plot
var month_one = ["Week 1", "Week 2", "Week 3", "Week 4"];

var trace_one = {
  x: month_one,
  y: monthData[index],
  type: 'scatter'
};

var layout_one = {
  title:"This month's Water Usage",
  yaxis:{
    title:'Liters'
  },
  titlefont:{
    family: 'Avenir, sans-serif',
    size: 18
  },
};

var data_one = [trace_one];

Plotly.newPlot('trend_water', data_one, layout_one,{displayModeBar: false});


var month_two = ["Week 1", "Week 2", "Week 3", "Week 4"];

var trace_two = {
  x: month_two,
  y: co2monthData[index],
  type: 'scatter'
};

var layout_two = {
  title:"This Month's CO2 Production",
  yaxis:{
    title:'Kilograms'
  },
  titlefont:{
    family: 'Avenir, sans-serif',
    size: 18
  },
};

var data_two = [trace_two];

Plotly.newPlot('trend_co2', data_two, layout_two, {displayModeBar: false});

var data_three = [{
  values: pieData[index],
  labels: ['Cooking', 'Shower', 'Cleaning', 'Drinking', 'misc'],
  type: 'pie'
}];

var layout_three = {
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

Plotly.newPlot('pie_water', data_three, layout_three, {displayModeBar: false});


var data_four = [{
  values: co2pieData[index],
  labels: ['Transportation', 'Products', 'misc'],
  type: 'pie'
}];

var layout_four = {
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

Plotly.newPlot('pie_co2', data_four, layout_four, {displayModeBar: false});

// Plotly.newPlot('trend_co2', data);
//setting the navbar
//setting the navbar
if(sessionStorage.getItem('userState')=== null||sessionStorage.getItem('userState')==='0'){
	document.getElementById('signupText').style.display="inline-block";
	document.getElementById('logoutText').style.display="none";
	document.getElementById('loginText').style.display="inline-block";
	document.getElementById('newimapctText').style.display="none";
	document.getElementById('trendText').style.display="none";
}else if (sessionStorage.getItem('userState')==='1'||sessionStorage.getItem('userState')==='2') {//user 1 is logged in
	document.getElementById('signupText').style.display="none";
	document.getElementById('newimapctText').style.display="inline-block";
	document.getElementById('trendText').style.display="inline-block";
	document.getElementById('logoutText').style.display="inline-block";
	document.getElementById('loginText').style.display="none";
}




