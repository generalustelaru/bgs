
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
let pollOption;
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
  pollOption = n;
}

function vote(){
  if (pollOption == null) {
    document.getElementById('voteError').innerHTML = "Pick an option first!";
  }else {
    document.getElementById('poll').style.animationName = "flip";
    setTimeout(function voteProcess() {
      var slate = document.getElementById('poll');
      document.getElementById('pollTitle').innerHTML = "Poll Results"
      slate.style.backgroundImage = "none";
      slate.style.backgroundColor = "white";
      var option = []; // tine raspunsurile text
      var optionRetrieve = document.getElementsByClassName('optionDescription');
      for (var i = 0; i < optionRetrieve.length; i++) {
        var transfer = optionRetrieve[i];
        option[i] = transfer.innerText;
      }//for
      slate.removeChild(slate.lastElementChild);
      for (var i = 0; i < option.length; i++) {
        var builder = document.createElement('span');
        builder.innerText = option[i];
        slate.appendChild(builder);
        builder = document.createElement('resultBar');
        var percentage = document.createElement('span');
        if (pollOption-1 == i){
          builder.style.backgroundColor = "#D2A11B";
          percentage.style.color = "black";
        }//if
        var seed = 73+Math.random()*300;
        builder.style.width = (seed+"px");
        percentage.style.marginLeft = ".5em";
        percentage.innerText = Math.round(seed)+" votes";
        builder.appendChild(percentage);
        slate.appendChild(builder);
        builder = document.createElement('hr');
        slate.appendChild(builder);
      }//for
    }, 500);//setTimeout
  }//else
}//function

/*function voteProcess(){

}//function*/
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
