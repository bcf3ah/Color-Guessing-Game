/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var numSquares = 6;
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var winningColor = pickColor();
var modeButtons = document.querySelectorAll(".mode");
var colorDisplay = document.querySelector("#colorDisplay");       
colorDisplay.textContent = winningColor.toUpperCase();
var squares = document.querySelectorAll(".square");
var message = document.getElementById("message");

for (var i=0; i<modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        if (this.textContent === "Easy"){
            numSquares = 3;
        } else {
            numSquares = 6;
        }
        console.log(numSquares, this.textContent);
        changeMode();
    });
}

function changeMode(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    
    //pick new random color winner from array
    winningColor = pickColor();
    
    //Change colorDisplay
    colorDisplay.textContent = pickColor();
    
    //change squares colors
    for (var i=0; i<squares.length; i++){
        if (colors[i]){
        squares[i].style.display = "block";    
        squares[i].style.background = colors[i];
        } else {
        squares[i].style.display = "none";
        }
    };
    
    //reset message
    message.textContent = "";
    
    //reset h1 background
    h1.style.background = "steelblue";
    
    //change reset button text back to New Colors
    reset.textContent = "New Colors";
}

//easyBtn.addEventListener("click", function(){
//    this.classList.add("selected");
//    hardBtn.classList.remove("selected");
//    colors = generateRandomColors(3);
//    winningColor = pickColor();
//    colorDisplay.textContent = winningColor;
//    for (var i=0; i<squares.length; i++){
//        if(colors[i]){ //saying "if colors at index i exists (ie is true), then make the squqre background color at that index one of the random colors
//            //so because in easyBTN we're passing only 3 random colors, colors1-3 will exist/be true, but 4-6 won't, so we set their disaply to none
//            squares[i].style.background = colors[i];
//        } else {
//            squares[i].style.display = "none";
//        }
//    }
//    numSquares = 3;
//});
//
//hardBtn.addEventListener("click", function(){
//    this.classList.add("selected");
//    easyBtn.classList.remove("selected");
//    colors = generateRandomColors(numSquares);
//    winningColor = pickColor();
//    colorDisplay.textContent = winningColor;
//    for (var i=0; i<squares.length; i++){
//    squares[i].style.background = colors[i];
//    squares[i].style.display = "block";
//    numSquares = 6;    
//    }
//});

reset.addEventListener("click", function(){
    changeMode();
    
});

for (var i=0; i<squares.length; i++){
    //get initial background colors
    squares[i].style.background = colors[i];
    
    //add click events
    squares[i].addEventListener("click", function(){
        if(this.style.background === winningColor){
            message.textContent = "Winner!";
            changeColor(winningColor);
            h1.style.background = winningColor;
            reset.textContent = "Play again?";
            
        } else {
            this.style.background = "#232323";
            message.textContent = "Try again!";
        }
    });
};

function changeColor(color){
    for (var j = 0; j<squares.length; j++){
                squares[j].style.background = color;
            }
}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make empty array
    var array = [];
    
    //add num random colors to array
    for (var i = 0; i<num; i++){
        //get random color and push into array Need a red, green, and blue value
        array.push(randomColor());
    }
    
    
    return array;
}

function randomColor(){
      var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        return "rgb("+r+", "+g+", "+b+")";
}