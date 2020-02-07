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
