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

var winCount = document.getElementById("winCount");     // display how many times user has won
var word = document.getElementById("word");             // display word chosen
var guessCount = document.getElementById("guessCount"); // display how many guesses left 
var letters = document.getElementById("letters");       // display incorrect letters already guessed 

var attemptsLeft = 10;                                  // Setting number of guesses
var win = 0;                                            // number of correct letters needed to win
var choice = Math.floor(Math.random() * wordList.length);
var answer = wordList[choice];
var wordLength = answer.length;
var display = [wordLength];                             // display _ 
var letterBank = [];                                    // empty array for incorrectly guessed letters


console.log(answer);

// Display how many guesses left
guessCount.textContent = attemptsLeft;

// Display initial wins
winCount.textContent = win;

//Display _
for (var i = 0; i < wordLength; i++) {
    display[i] = " _ ";
    word.textContent = ([display.join("")]); 
}


function loadGame(){
    choice = wordlist[Math.floor(Math.random() * wordList.length)];
    document.getElementById(letters).innerHTML = "";
    letterBank = [];
}

function checkLetter(letter){
    for (var j = 0; j < wordLength; j++){
        // display correct letter instead of _
        if (answer[j] === letter) {
            display[j] = letter;
        }
       
    }
    word.textContent = display.join("");
    attemptsLeft--;
    letterBank.push(letter);
    letters.textContent = letterBank;
}

function winGameChecker(){
 
}

document.onkeyup = function(){
    loadGame();
    var userGuess = event.key;
    //console.log(userGuess);
    guessCount.textContent = attemptsLeft;
    userGuess = userGuess.toUpperCase();
    checkLetter(userGuess);
    
    console.log(letterBank);


}