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
var win = wordLength;                                   // number of correct letters needed to win
var letterBank = [];                                    // empty array for incorrectly guessed letters
var answerBank = [];                                    // empty array for correctly guessed letters

// Display how many guesses left
guessCount.textContent = attemptsLeft;


// Display initial wins
winCount.textContent = 0;


// Choose random # to correspond with array words
var choice = Math.floor(Math.random() * wordList.length);
var answer = wordList[choice];
var wordLength = answer.length;


// display how many letters from word chosen 
for (var i = 0; i < wordLength; i++) {
    display[i] = " _ ";
    word.textContent = ([display.join("")]); 
}

// onkeyup function event
document.onkeyup = function(event) {
var userGuess = event.key;

// make all keys uppercase
userGuess = userGuess.toUpperCase();

// print guess to html
// letters.textContent = userGuess; 

// keep track of all letters pressed // trigger-random-unsolved week 4 day 2 // drinklist-solved {not working correctly}
 letterBank.push(userGuess);

for (var i = 0; i < letterBank.length; i++) {
    var letterDisplay = document.createElement("ul");
    letterDisplay.textContent = letterBank[i];
    letters.appendChild(letterDisplay);
 }

// for loop (var i=0; i<=(forever? until words run out?); i++)
    // if statement
        // if word = true
        // winCount++ 
        // else if guessCount=0, restart
        //else
            // if statement
                // if letter is in word, display in word
                // else letter is not in word, display in letters, guessCount -1


    // Check letter and replace if correct {not working}
     function checkLetter(){
        for (var j = 0; j < wordLength; j++){
            if (answer[j] = userGuess) {
                answerBank[j] = userGuess;

            }
        }
     }








                

}