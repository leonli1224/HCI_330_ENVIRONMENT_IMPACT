window.onload = function(){
  var submitButton = document.getElementById("sub-btn");
  var userName = document.getElementById('uname').value;
  var pass = document.getElementById('pword').value;
  var pword = document.getElementById("test");

  submitButton.onclick = function login() {
    //alert("button clicked");
    if(userName.valueOf()=='user1'){
      alert("Button clicked");
      document.getElementById('test').innerHTML = 'yes';
    }
  }
}
