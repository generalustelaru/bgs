(
  function(){
    console.log("hello");
    let networkNames = ['gab', 'wk', 'pinterest', 'twitter', 'facebook'];
    for (var i = 0; i < networkNames.length; i++) {
      var icon = document.createElement('img');
      icon.src = "resource/social/"+networkNames[i]+".jpg";
      icon.id = networkNames[i];
      var button = document.createElement('div');
      button.className = "socialButton";
      button.appendChild(icon);
      document.getElementById('socialBar').appendChild(button);
    }
  }
  ()
)

window.onscroll = function() {popOut()}; //NEW
function popOut(){
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) { // NEW
    document.getElementById("toTop").style.transform = 'rotate(50deg)';
    document.getElementById("toTop").style.left = '-50px';
  }else{
    document.getElementById("toTop").style.transform = 'rotate(0deg)';
    document.getElementById("toTop").style.left = '-180px';
  }
}
