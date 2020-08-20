var randomNumber1=Math.floor(Math.random()*6)+1;
var diceImage1="dice"+randomNumber1+".png";
var finalImage1="images/"+diceImage1;

var x=document.querySelectorAll("img")[0];
x.setAttribute("src",finalImage1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var diceImage2="dice"+randomNumber2+".png";
var finalImage2="images/"+diceImage2;

var y=document.querySelectorAll("img")[1];
y.setAttribute("src",finalImage2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩Player 1 wins!!";
}
 else if(randomNumber2>randomNumber1)
 {
  document.querySelector("h1").innerHTML="Player 2 wins🚩!!";
 }
 else
 {
   document.querySelector("h1").innerHTML="Draw!";
 }
