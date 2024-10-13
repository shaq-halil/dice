var diceOneNumber = Math.random();
diceOneNumber = Math.floor(diceOneNumber * 6) + 1 
document.querySelector('.img1').setAttribute('src' , "./images/dice"+diceOneNumber+".png") ;

var diceTwoNumber = Math.random();
diceTwoNumber = Math.floor(diceTwoNumber * 6) + 1 
document.querySelector('.img2').setAttribute('src' , "./images/dice"+diceTwoNumber+".png") ;

if (diceOneNumber > diceTwoNumber){
    document.querySelector("h1").textContent= "player1 wins";
}
else if (diceTwoNumber > diceOneNumber){
    document.querySelector("h1").textContent= "player2 wins";
}

else {document.querySelector("h1").textContent= "draw"; }
