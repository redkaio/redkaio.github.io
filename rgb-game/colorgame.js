var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var hardSelected = document.querySelector(".hardselected");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


hardSelected.addEventListener("click", function () {

    this.classList.add("hardselected");
    easyBtn.classList.remove("hardselected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    
    for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
    }
);

easyBtn.addEventListener("click", function () {
    
    easyBtn.classList.add("hardselected");
    hardSelected.classList.remove("hardselected");
    numSquares = 3
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

// resetButtom.addEventListener("click", resetGame());
resetButton.addEventListener("click", function () {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colors of square
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "Pick a color";

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];

    }
});



colorDisplay.textContent = pickedColor;



for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            // alert("Correct");
            messageDisplay.textContent = "Correct!"
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;

        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again!";


        };

    });
};




function changeColors(color) {
    //loop through all squares
    //change each color to match given color

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
};



function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};



function generateRandomColors(num) {
    //make an array
    var arr = []
    //add num random colors to array
    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
        // get random color and push into arr
    }
    //return that array
    return arr;
};



function randomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //blue a  "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
};

function resetGame() {
    //generate all new colors
    colors = generateRandomColors(6);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colors of square
    colorDisplay.textContent = pickedColor;
};


//EVERYTHING BELOW IS AN UPDATED VERSION OF THE CODE
//EVERYTHING BELOW IS AN UPDATED VERSION OF THE CODE
//EVERYTHING BELOW IS AN UPDATED VERSION OF THE CODE
//EVERYTHING BELOW IS AN UPDATED VERSION OF THE CODE
//EVERYTHING BELOW IS AN UPDATED VERSION OF THE CODE
//EVERYTHING BELOW IS AN UPDATED VERSION OF THE CODE
//EVERYTHING BELOW IS AN UPDATED VERSION OF THE CODE
//EVERYTHING BELOW IS AN UPDATED VERSION OF THE CODE



// var numSquares = 6;
// var colors = generateRandomColors(numSquares);
// var squares = document.querySelectorAll(".square");
// var pickedColor = pickColor();
// var colorDisplay = document.querySelector("#colorDisplay");
// var messageDisplay = document.querySelector("#message");
// var h1 = document.querySelector("h1");
// var resetButton = document.querySelector("#reset");
// var hardSelected = document.querySelector(".hardselected");
// var modeButtons = document.querySelectorAll(".mode");

// for(var i = 0; i < modeButtons.length; i++) {
//     modeButtons[i].addEventListener("click", function() {
//         modeButtons[0].classList.remove("selected");
//         modeButtons[1].classList.remove("selected");
//         this.classList.add("selected");

//     });
// };


// hardSelected.addEventListener("click", function () {

//     this.classList.add("hardselected");
//     easyBtn.classList.remove("hardselected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     resetButton.textContent = "New Colors";
    
//     for (var i = 0; i < squares.length; i++) {
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//         }
//     }
// );

// easyBtn.addEventListener("click", function () {
    
//     easyBtn.classList.add("hardselected");
//     hardSelected.classList.remove("hardselected");
//     numSquares = 3
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     resetButton.textContent = "New Colors";
    
//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }


//     }


// });

// // resetButtom.addEventListener("click", resetGame());
// resetButton.addEventListener("click", function () {
//     //generate all new colors
//     colors = generateRandomColors(numSquares);
//     //pick a new random color from array
//     pickedColor = pickColor();
//     //change colors of square
//     colorDisplay.textContent = pickedColor;
//     h1.style.backgroundColor = "steelblue";
//     resetButton.textContent = "New Colors";
//     messageDisplay.textContent = "Pick a color";

//     for (var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];

//     }
// });



// colorDisplay.textContent = pickedColor;



// for (var i = 0; i < squares.length; i++) {
//     //add initial colors to squares
//     squares[i].style.backgroundColor = colors[i];

//     //add click listeners to squares
//     squares[i].addEventListener("click", function () {
//         //grab color of clicked square
//         var clickedColor = this.style.backgroundColor;
//         //compare color to pickedColor
//         if (clickedColor === pickedColor) {
//             // alert("Correct");
//             messageDisplay.textContent = "Correct!"
//             resetButton.textContent = "Play Again?"
//             changeColors(clickedColor);
//             h1.style.backgroundColor = clickedColor;

//         } else {
//             this.style.backgroundColor = "#232323";
//             messageDisplay.textContent = "Wrong! Pick Another One!";


//         };

//     });
// };




// function changeColors(color) {
//     //loop through all squares
//     //change each color to match given color

//     for (var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = color;
//     }
// };



// function pickColor() {
//     var random = Math.floor(Math.random() * colors.length);
//     return colors[random];
// };



// function generateRandomColors(num) {
//     //make an array
//     var arr = []
//     //add num random colors to array
//     for (var i = 0; i < num; i++) {
//         arr.push(randomColor())
//         // get random color and push into arr
//     }
//     //return that array
//     return arr;
// };



// function randomColor() {
//     //pick a "red" from 0 - 255
//     var r = Math.floor(Math.random() * 256);
//     //pick a "green" from 0 - 255
//     var g = Math.floor(Math.random() * 256);
//     //blue a  "blue" from 0 - 255
//     var b = Math.floor(Math.random() * 256);

//     return "rgb(" + r + ", " + g + ", " + b + ")";
// };

// function resetGame() {
//     //generate all new colors
//     colors = generateRandomColors(6);
//     //pick a new random color from array
//     pickedColor = pickColor();
//     //change colors of square
//     colorDisplay.textContent = pickedColor;
// };
