

  /***********************************************
  * Drop Down Date select script- by JavaScriptKit.com
  * This notice MUST stay intact for use
  * Visit JavaScript Kit at http://www.javascriptkit.com/ for this script and more
  ***********************************************/

  var monthtext=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];

  function populatedropdown(dayfield, monthfield, yearfield){
    var today=new Date()
    var dayfield=document.getElementById(dayfield)
    var monthfield=document.getElementById(monthfield)
    var yearfield=document.getElementById(yearfield)
    for (var i=0; i<31; i++)
      dayfield.options[i]=new Option(i, i+1)
    dayfield.options[today.getDate()]=new Option(today.getDate(), today.getDate(), true, true) //select today's day
    for (var m=0; m<12; m++)
      monthfield.options[m]=new Option(monthtext[m], monthtext[m])
    monthfield.options[today.getMonth()]=new Option(monthtext[today.getMonth()], monthtext[today.getMonth()], true, true) //select today's month
    var thisyear=today.getFullYear()
    for (var y=0; y<20; y++){
      yearfield.options[y]=new Option(thisyear, thisyear)
      thisyear+=1
    }
    yearfield.options[0]=new Option(today.getFullYear(), today.getFullYear(), true, true) //select today's year
  }

  var timetext=['AM','PM'];

  function populatedropdowntime(hourfield, secfield, timefield){
    //var today=new Date()
    var hourfield=document.getElementById(hourfield)
    var secfield=document.getElementById(secfield)
    var timefield=document.getElementById(timefield)
    for (var i=0; i<13; i++)
      hourfield.options[i]=new Option(i)
    //dayfield.options[today.getDate()]=new Option(today.getDate(), today.getDate(), true, true) //select today's day
    for (var m=0; m<60; m++)
      secfield.options[m]=new Option(m)
    //monthfield.options[today.getMonth()]=new Option(monthtext[today.getMonth()], monthtext[today.getMonth()], true, true) //select today's month
    //var thisyear=today.getFullYear()
    for (var y=0; y<2; y++)
      timefield.options[y]=new Option(timetext[y], timetext[y])
    //thisyear+=1
    //yearfield.options[0]=new Option(today.getFullYear(), today.getFullYear(), true, true) //select today's year
  }

  var watertype=['------water------', 'misc', 'Shower', 'Drinking', 'Cooking', 'Cleaning', '------co2-------', 'misc', 'Products', 'Transportation'];
  var co2type=['misc', 'Products', 'Transportation']

  function typedropdownwater(typefield) {
    var typefield=document.getElementById(typefield)
    for (var i=0; i<10; i++) {
      typefield.options[i]=new Option(watertype[i])
    }
  }

  function typedropdownco2(typefield) {
    var typefield=document.getElementById(typefield)
    for (var i=0; i<3; i++) {
      typefield.options[i]=new Option(co2type[i])
    }
  }

  function changetoliter() {
    document.getElementById('unit').innerHTML = 'Liter'
  }

  function changetogram() {
    document.getElementById('unit').innerHTML = 'Gram'
  }

  //data validation for liters
  function myFunction() {
      var x, text;

      // Get the value of the input field with id="numb"
      x = document.getElementById("numb").value;

      // If x is Not a Number or less than one or greater than 10
      if (isNaN(x) || x < 1 || x > 10) {
          text = "Input not valid";
      } else {
          text = "Input OK";
      }
      document.getElementById("demo").innerHTML = text;
  }

//populatedropdown(id_of_day_select, id_of_month_select, id_of_year_select)
window.onload=function(){
populatedropdown("daydropdown", "monthdropdown", "yeardropdown")
populatedropdowntime("hourdropdown", "secdropdown", "timedropdown")
typedropdownwater("waterdropdown")
typedropdownco2("co2dropdown")
}

console.log(document.getElementById("co2dropdown").style.display)
console.log(document.getElementById("waterdropdown").style.display)
//modal POPUP TO BE IMPLEMENTED LATER 
window.onload = function(){
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById('myBtn');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

}
