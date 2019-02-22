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
var myHeading = document.querySelector('h1');
var name = localStorage.getItem('name');
function hello(name)
{
  if(name === null)
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
  var myName = prompt('Введите своё имя:');
  if(myName === null)
  {
    if(name === null)
    {
      myName = 'незнакомец';
    }
    else
    {
      myName = name;
    }
  }
  else
  {
    localStorage.setItem('name', myName);
  }
  hello(myName);
}

if(!name)
{
  hello('незнакомец');
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