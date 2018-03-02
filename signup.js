window.onload = function(){
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

  document.getElementById('sub-btn').onclick = function login() {
    var userName = document.getElementById('uname').value;
    var pass = document.getElementById('pword').value;
    var email = document.getElementById('email').value;
    if(!email.includes("@") || !email.includes(".com")||!email.includes(".edu")||!email.includes(".org")){
      alert("Please enter a valid email");
    }else{
      window.location.assign('index.html');
    }
  }
}
