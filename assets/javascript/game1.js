//rewriting this project I wrote so terribly before 
//Don't forget to check HTML for correct script tag!

//Declare word array
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

//HTML
var winCount = document.getElementById("winCount");     // display how many times user has won
var word = document.getElementById("word");             // display word chosen
var guessCount = document.getElementById("guessCount"); // display how many guesses left 
var letters = document.getElementById("letters");       // display letters already guessed 

//Variables
var attemptsLeft = 10;                                  // Setting number of guesses
var win = 0;                                            // number of correct letters needed to win
var choice = Math.floor(Math.random() * wordList.length);
var answer = wordList[choice];
var wordLength = answer.length;
var display = [wordLength];                             // display _ 
var letterBank = [];                                    // empty array for incorrectly guessed letters


console.log(answer);

function displayGame() {
    
    //Display _
    for (var i = 0; i < wordLength; i++) {
        display[i] = " _ ";
        word.textContent = ([display.join("")]);
    }
    // Display how many guesses left
    guessCount.textContent = attemptsLeft;

    // Display initial wins
    winCount.textContent = win;
}


function loadGame() {
    letters.innerHTML = "";
}

function checkLetter(letter) {
    for (var j = 0; j < wordLength; j++) {
        // display correct letter instead of _
        if (answer[j] === letter) {
            display[j] = letter;
        }
    }
    letterBank.push(letter);
    word.textContent = display.join("");
    attemptsLeft--;

    winGameCheck();
}

function winGameCheck() {

    if (display.indexOf(" _ ") === -1) {
        win++
        console.log("success!");
        console.log(win);
        winCount.textContent = win;
        reloadGame();
    }
    else if (attemptsLeft === -1) {
        console.log("try again");
        reloadGame();
    } 
}

function reloadGame() {

    attemptsLeft = 10;
    letterBank = [];
    //pick new word (not working)
    choice = Math.floor(Math.random() * wordList.length);
    answer = wordList[choice];
    wordLength = answer.length;
    display = [wordLength];
    console.log(answer);
    startGame();
}

function startGame() {

    displayGame();

    document.onkeyup = function () {
        loadGame();
        var userGuess = event.key;
        guessCount.textContent = attemptsLeft;
        userGuess = userGuess.toUpperCase();
        checkLetter(userGuess);

        letters.textContent = letterBank;
    }
}

startGame();