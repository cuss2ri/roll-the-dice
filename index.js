randomNumber1 = Math.ceil(Math.random() * 6);
imglink1 = "./images/dice"+randomNumber1+".png"
document.querySelector(".img1").setAttribute("src",imglink1)

randomNumber2 = Math.ceil(Math.random() * 6);
imglink2 = "./images/dice"+randomNumber2+".png"
document.querySelector(".img2").setAttribute("src",imglink2)

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!"
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!"
}
else if (randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="Draw!"
}