function blurbUp(n){
  var a = document.getElementsByClassName('description');
  a[n].style.height = '200px';

}

function blurbDown(n){
  var a = document.getElementsByClassName('description');
  a[n].style.height = '100px';
}

function fake(){
  var fakeNews = document.getElementById('fake');
  fakeNews.innerText = "fake";
  //fakeNews.style.backgroundColor = "#900000";
  fakeNews.style.color = "white";
}
function deFake(){
  var fakeNews = document.getElementById('fake');
  fakeNews.innerText = "news";
  fakeNews.style.backgroundColor = "";
  fakeNews.style.color = "";
}
