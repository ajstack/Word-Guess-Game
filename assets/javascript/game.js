//Don't forget to check HTML for correct script tag!

// Declare variables and word array (array must be in all caps)
var wordList = [
    "BATMAN",
    "ROBIN",
    "NIGHTWING",
    "REDHOOD",
    "REDROBIN",
    "JOKER",
    "PENGUIN",
    "CATWOMAN",
    "MRFREEZE",
    "BATGIRL",
    "BATWOMAN" 
];

// setup do display to html
var winCount = document.getElementById("winCount");     // display how many times user has won
var word = document.getElementById("word");             // display word chosen
var guessCount = document.getElementById("guessCount"); // display how many guesses left 
var attemptsLeft = 10;                                  // Setting number of guesses
var letters = document.getElementById("letters");       // display incorrect letters already guessed 
var display = [wordLength];                             // display _ 
var win = 0;                                            // number of correct letters needed to win
var letterBank = [];                                    // empty array for incorrectly guessed letters
var answerBank = [];                                    // empty array for correctly guessed letters

// Display how many guesses left
guessCount.textContent = attemptsLeft;


// Display initial wins
winCount.textContent = win;


// Choose random # to correspond with array words
var choice = Math.floor(Math.random() * wordList.length);
var answer = wordList[choice];
var wordLength = answer.length;
console.log(answer);

// display how many letters from word chosen 
for (var i = 0; i < wordLength; i++) {
    display[i] = " _ ";
    word.textContent = ([display.join("")]); 
}

function loadGame(){
    attemptsLeft = 10;
    choice = wordlist[Math.floor(Math.random() * wordList.length)];
    document.getElementById(letters).innerHTML = "";
    letterBank = [];
}

function winGameChecker(){
    
}


// onkeyup function event
document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);
    attemptsLeft--;
    guessCount.textContent = attemptsLeft;
    
    if (attemptsLeft===0) {
        alert("You lost!");
    }
    // make all keys uppercase
    
    checkLetter();
    // print guess to html
    // letters.textContent = userGuess; 

    // keep track of all letters pressed // trigger-random-unsolved week 4 day 2 // drinklist-solved {not working correctly}
    letterBank.push(userGuess);

    //var letterDisplay = document.createElement("ul");
    //letterDisplay.textContent = letterBank;
    //letters.appendChild(letterDisplay);
    letters.textContent = letterBank;
 

    
    // Check letter and replace if correct 
     function checkLetter(){
        userGuess = userGuess.toUpperCase();
        for (var j = 0; j < wordLength; j++){
            if (answer[j] == userGuess) {
                display[j] = userGuess;
                
                // display correct letter instead of _
            }
            else {
                
                // add to letterBank array and display incorrect letter in letters
                // guessCount--
            }
        }
        word.textContent = display.join("");
     }
     






                

}