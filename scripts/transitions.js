//console.log('Hello world!');
//document.getElementById('test').style.color= "red";
//var a = document.getElementsByClassName('description');
//console.log(a);
//a[1].style.height = '200px';
//a.style.color = 'red';
// = "red";

function blurbUp(n){
  var a = document.getElementsByClassName('description');
  a[n].style.height = '200px';

}
function blurbDown(n){
  //await delay(500);
  var a = document.getElementsByClassName('description');
  a[n].style.height = '100px';
}

//document.getElementsByClassName('featurette').addEventListener(mouseout, blurbDown);
