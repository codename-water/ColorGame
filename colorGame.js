var colors = generateRandomColors(6)

var squares = document.querySelectorAll(".square");
var pickedColor = randomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1  = document.querySelector("h1")

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        //grab the clicked color
        var clickedColor = this.style.backgroundColor;
        //compare the clicked color
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct'
            changeColors(clickedColor)
            h1.style.backgroundColor = pickedColor
        } else {
            this.style.backgroundColor = '#232323'
            messageDisplay.textContent = 'Try Again'
        }
    });
}

function changeColors(color){
    for(var i=0; i < colors.length; i++){
        squares[i].style.backgroundColor = color
    }
}

function randomColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function generateRandomColors(num){
    //make an array
    var arr = []
    // add num random colors to that array
    for(var i=0; i<num; i++){
        //generate a random color
        arr.push(randomColorGenerator())
    }
    // return that array
    return arr
}

function randomColorGenerator(){
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}