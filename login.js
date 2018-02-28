window.onload = function(){
  var submitButton = document.getElementById("sub-btn");
  var pword = document.getElementById("test");

  var username_one='user1';
  var username_two = 'user2';

  var password_one='psw1';
  var password_two = 'psw2';

  //global variable
  var user_state = 0;//0, nobody logged in/1 user1 is logged in/ 2 user2 is logged in

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

  submitButton.onclick = function login() {
    var userName = document.getElementById('uname').value;
    var pass = document.getElementById('pword').value;

    if(userName===username_one && pass===password_one){
      //alert("Button clicked");
      user_state = 1;
      window.location.assign('index.html');
      sessionStorage.setItem('userState','1');
      //alert("You have been logged in");
    }else if (userName===username_two && pass===password_two) {
      user_state = 2;
      window.location.assign('index.html');
      sessionStorage.setItem('userState','2');
    }else if(userName !== username_one || pass !== password_one || userName !== username_two || pass !== password_two){
      alert("This is not a valid username or password. Please try again");
    }
  }
}
