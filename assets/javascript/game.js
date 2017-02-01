// choices available aka the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// variables defining what makes up the game: the score counters, the guesses and the letter to guess or the computer
var win = 0;
var loss = 0;
var guess = 10;
var guessesCount = 10;
var guessedLetters = [];
var letterToGuess = null;



// computer randomly selects a letter in the alphabet
var computer = alphabet[Math.floor(Math.random() * alphabet.length)];

// User Guess Counter
var updateGuessesCount = function() {
// this prints the Guess Counter to HTML / query selector is used to target a specfic id in html so it knows where to print
  document.querySelector("#guessesCount").innerHTML = "Your Guesses Left: " + guessesCount;
};
// makes the computer choose another random word when it is reset
var updateLetterToGuess = function() {
  this.letterToGuess = this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
};
// prints the guesses guessed .join(puts a space between the letters)
var updateGuessedLetters = function() {
  document.querySelector("#guessesShown").innerHTML = "Your Guesses: " + guessedLetters.join(" ");
};
// Function will be called when we reset, total Guesses and Guesses Left as well as the Guessed Letter reset and then the functions run againg to play the game
var reset = function() {
  guess = 10;
  guessesCount = 10;
  guessedLetters = [];
  // runs my previously created functions
  updateGuessesCount();
  updateLetterToGuess();
  updateGuessedLetters();
}

updateLetterToGuess();
updateGuessesCount();


//User key press equals their guess
document.onkeyup = function(event) {
    guessesCount--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  // this pushes the users guess into the array of guessed letters and then updates
  guessedLetters.push(userGuess);
  updateGuessesCount();
  updateGuessedLetters();
            // if the guesses left are greater than zero and the user guesses the correct letter then the win variable gets plus one and then printed to the html or screen
        if (guessesCount > 0){
            if (userGuess == letterToGuess){
                win++;
                document.querySelector('#wins').innerHTML = "Wins: " + win;
                reset();
            }
            // if the guesses left are equal to zero then the loss variable is given plus one and it is printed to the screen with innerHTML
        }else if(guessesCount == 0){ 
            loss++;
            document.querySelector('#losses').innerHTML = "Losses: " + loss;
            // this reset(function)code pulls the previously stated reset function on line 30
            reset();
        }
};