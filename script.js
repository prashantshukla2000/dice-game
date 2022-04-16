var randomnumber1=Math.floor(Math.random()*6)+1;
var diceno1="images/dice"+randomnumber1+".png";
document.querySelector(".img1").setAttribute("src",diceno1);


  var randomnumber2=Math.floor(Math.random()*6)+1;
  var diceno2="images/dice"+randomnumber2+".png";
  document.querySelectorAll("img")[1].setAttribute("src",diceno2);

  if(randomnumber1>randomnumber2){
    document.querySelector("h1").textContent="🚩Player 1 wins";
  }
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Player 2 wins🚩";
  }
else{
  document.querySelector("h1").textContent="Draw!";


  }
