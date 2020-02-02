
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
      slate.innerHTML = "<h2>Thanks for subscribing! <heart>&#9829;</heart></h2><p>You will receive a confirmation e-mail. Please make sure you read it.</p>";
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
  var a = document.getElementById('l'+n); // container label
  var c = document.getElementById('po'+n); // visual selector
  console.log(a);
  console.log(b);
  for (var i = 1; i <= 5; i++) {
    if (i != n){
      var b = document.getElementById('l'+i);
      b.style.textShadow = "";
    }
  }
  //a.style.backgroundColor = "#D2A11B";
  //c.style.backgroundColor = "white";
}

function vote(){
  alert("'s-obosit");
}

function contactForm(){
  var eMail = document.getElementById('email').value;
  if (document.getElementById("news").checked == true) {
    localStorage.setItem("news", 'true');
  }
  if (document.getElementById("digest").checked == true) {
    localStorage.setItem("digest", 'true');
  }
  if (eMail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    window.open("message-submition.html", "_self");
  } else {
    document.getElementById('emailError').innerHTML = "Oops! Something's wrong with your e-mail address :(";
    //document.getElementById('email').style.border = "1px solid red";
  }
}
