
(
  function(){
    if (document.getElementById('subscription') != null) {
      if (localStorage.getItem('sub') == "subbed")
      document.getElementById('subscription').remove();
    }
  }
  ()
)
function clearSub(){
  localStorage.clear();
  console.log('storage cleared');
}
function emailRetry(){
  document.getElementById('emailError').innerHTML = "";
}

function subscribe(){
  var eMail = document.getElementById('email').value;
  if (eMail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    var slate = document.getElementById('subscription');
    while (slate.firstElementChild != null) {
      slate.removeChild(slate.firstElementChild);
    }
    if (localStorage.getItem("sub") != "subbed") {
      slate.innerHTML = "<br><br><h2>Thanks for subscribing! <heart>&#9829;</heart></h2><p>You will receive a confirmation e-mail soon.<br> Make sure to also check your spambox.</p>";
      localStorage.setItem("sub", "subbed");
    }else {
      slate.innerHTML = "<h2>It looks like you're already subscribed.</h2>";
    }
    //console.log(localStorage.getItem("sub"));
  }else{
    document.getElementById('emailError').innerHTML = "<p>Oops! Something's wrong with your e-mail address :(</p>";
  }
}

function pollSelect(n){ // When pollOption n is selected
  var a = document.getElementById('option'+n); // container label
  var a2 = document.getElementById('check'+n);
  for (var i = 1; i <= 5; i++) {
    if (i != n){
      var b2 = document.getElementById('check'+i);
      var b = document.getElementById('option'+i);
      b.style.opacity = "0.80";
      b2.style.opacity = "0";
    }
  }
  a.style.opacity = "1";
  a2.style.opacity = "1";
}

function vote(){
  alert("Coming soon :)");
}

function contactForm(){
  var eMail = document.getElementById('email').value;
  if (eMail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    var slate = document.getElementById('contactForm');
    slate.removeChild(slate.firstElementChild);
    var feedback = document.createElement('h2');
    feedback.innerHTML = "Thank you for contacting us! <heart>&#9829;</heart>";
    document.getElementById('contactForm').appendChild(feedback);
    var notice = document.createElement('p');
    notice.innerHTML = "You will be redirected shortly...";
    document.getElementById('contactForm').appendChild(notice);
    slate.style.textAlign = "center";
    setTimeout(redirect, 3000);
  } else {
    document.getElementById('emailError').innerHTML = "Oops! Something's wrong with your e-mail address :(";
    //document.getElementById('email').style.border = "1px solid red";
  }
}
function redirect(){
  //var location = ['index', 'news', 'reviews', 'blog', 'contact'];
  //window.open(location[link]+".html", "_self");
  window.open("index.html", "_self");
}
