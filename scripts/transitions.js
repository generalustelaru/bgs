function blurbUp(n){
  var a = document.getElementsByClassName('description');
  a[n].style.height = '200px';

}

function blurbDown(n){
  var a = document.getElementsByClassName('description');
  a[n].style.height = '100px';
}

function pollHover(n){
  var a = document.getElementById('po'+n);
  a.style.opacity = "1";
}

function pollOut(n){
  var a = document.getElementById('po'+n);
  a.style.opacity = "0";
}
