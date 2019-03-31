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
var winCount = document.getElementById("winCount");                 // display how many times user has won
var word = document.getElementById("word");                         // display word chosen
var guessCount = document.getElementById("guessCount");             // display how many guesses left 
var letters = document.getElementById("letters");                   // display letters already guessed
var lastCorrectWord = document.getElementById("LastCorrectWord");   // display the last correct word

//Variables
var attemptsLeft = 10;                                  // Setting number of guesses
var win = 0;                                            // number of correct letters needed to win
var choice = Math.floor(Math.random() * wordList.length);
var answer = wordList[choice];
var wordLength = answer.length;
var display = [wordLength];                             // display _ 
var letterBank = [];                                    // empty array for incorrectly guessed letters

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

    // empty letters in HTML
    letters.innerHTML = "";
}

function checkLetter(letter) {

    // determine if the letter guessed is correct
    for (var j = 0; j < wordLength; j++) {
        if (answer[j] === letter) {
            display[j] = letter;
        }
    }
    // push correct letter into the letter bank
    letterBank.push(letter);
    // display letter in HTML instead of _
    word.textContent = display.join("");
    // subtract attempts
    attemptsLeft--;

    winGameCheck();
}

function winGameCheck() {

    // if no blank spaces are left add to the win count and restart game
    if (display.indexOf(" _ ") === -1) {
        win++
        winCount.textContent = win;
        reloadGame();
    }
    // if there are no attempts left restart game
    else if (attemptsLeft === -1) {
        reloadGame();
    } 
}

function reloadGame() {

    // reset everything except wins
    lastCorrectWord.textContent = answer;
    attemptsLeft = 10;
    letterBank = [];
    choice = Math.floor(Math.random() * wordList.length);
    answer = wordList[choice];
    wordLength = answer.length;
    display = [wordLength];

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