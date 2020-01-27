//var news = false;
//var digest = false;
//localStorage.setItem("news", news);
//localStorage.setItem("digest", digest);
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
  }
}
