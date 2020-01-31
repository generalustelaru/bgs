//var news = false;
//var digest = false;
//localStorage.setItem("news", news);
//localStorage.setItem("digest", digest);
function emailRetry(){
  document.getElementById('emailError').innerHTML = "";
}

function contactForm(){
  var eMail = document.getElementById('email').value;
  if (document.getElementById("news").checked == true) {
    //news = 'true';
    localStorage.setItem("news", 'true');
  }
  if (document.getElementById("digest").checked == true) {
    //digest = 'true';
    localStorage.setItem("digest", 'true');
  }
  if (eMail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    console.log(news);
    console.log(digest);
    window.open("message-submition.html", "_self");
  } else {
    document.getElementById('emailError').innerHTML = "Oops! Something's wrong with your e-mail address :(";
    document.getElementById('email').style.border = "1px solid red";
    //document.getElementById('email').style.padding.left = "10px;";
  }
}
function subscribe(){
  var eMail = document.getElementById('email').value;
  if (eMail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    alert("You're all set!");
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('email').style.border = "";
    document.getElementById('email').value = "";
  }else{
    document.getElementById('emailError').innerHTML = "<p>Oops! Something's wrong!</p>";
    document.getElementById('email').style.border = "1px solid red";
    document.getElementById('email').style.height = "2em";
    //document.getElementById('email').style.width = "310px";
  }
}
