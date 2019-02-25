var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/myimage.png') {
      myImage.setAttribute ('src','img/myimage2.png');
    } else {
      myImage.setAttribute ('src','img/myimage.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');
var name = localStorage.getItem('name');
function hello(name)
{
  if(name === 'null')
  {
    myHeading.innerHTML = 'Привет, незнакомец';
  }
  else
  {
    myHeading.innerHTML = 'Привет, ' + name;
  }
}

function setUserName()
{
  var tempName = prompt('Введите своё имя:\n(Enter your name)');
  if(tempName != null)
  {
    name = tempName;
  }
  localStorage.setItem('name', name);
  hello(name);
}

if(!name || name === 'null')
{
  /*hello(null);*/
  setUserName();
}
else
{
  hello(name); 
}

myButton.onclick = function()
{
  setUserName();
}