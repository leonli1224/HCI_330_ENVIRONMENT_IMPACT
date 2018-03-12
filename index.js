window.onload = function(){
  //setting the navbar
  /*if(sessionStorage.getItem('userState')=== null||sessionStorage.getItem('userState')==='0'){//user is not logged in
    document.getElementById('signupText').style.display="inline-block";
    document.getElementById('logoutText').style.display="none";
    document.getElementById('loginText').style.display="inline-block";
    document.getElementById('newimapctText').style.display="none";
    document.getElementById('trendText').style.display="none";*/
  if (sessionStorage.getItem('userState')==='1'||sessionStorage.getItem('userState')==='2') {//user 1 is logged in
    /*document.getElementById('signupText').style.display="none";
    document.getElementById('newimapctText').style.display="inline-block";
    document.getElementById('trendText').style.display="inline-block";
    document.getElementById('logoutText').style.display="inline-block";*/
    document.getElementById('userInfoText').innerHTML= sessionStorage.getItem('userState')==='1' ? 'Hello! user1' : 'Hello! user2';
    document.getElementById('userInfoText').style.display="inline-block";
    //document.getElementById('loginText').style.display="none";
  }
}
