window.onload = function(){
  var submitButton = document.getElementById("sub-btn");
  var pword = document.getElementById("test");

  var username_one='user1';
  var username_two = 'user2';

  var password_one='psw1';
  var password_two = 'psw2';

  //global variable
  var user_state = 0;//0, nobody logged in/1 user1 is logged in/ 2 user2 is logged in

  /*if(user_state === 1 || user_state===2){
    document.getElementById('loginText').style.display="none";
  }*/

  submitButton.onclick = function login() {
    var userName = document.getElementById('uname').value;
    var pass = document.getElementById('pword').value;

    if(userName===username_one && pass===password_one){
      //alert("Button clicked");
      user_state = 1;
      window.location.assign('index.html');
      document.getElementById('loginText').style.display="none";
      //localStorage.setItem
      //alert("You have been logged in");
    }else if (userName===username_two && pass===password_two) {
      user_state = 2;
      window.location.assign('index.html');
    }else if(userName !== username_one || pass !== password_one || userName !== username_two || pass !== password_two){
      alert("This is not a valid username or password. Please try again");
    }
  }
}
