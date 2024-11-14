// var randomNum = Math.random() * 10; 
// var correctNum = Math.floor(randomNum) + 1; 

// // var userNum = +prompt("Guess the number between 1 to 10:");
// function number(){
//     if (userNum === correctNum) {
//         document.write("<p>Your Answer is Correct!</p>");
//         document.write('<img src="images/right.png" alt="correct">');
//     } else if (userNum === correctNum + 1 || userNum === correctNum - 1) {
//         document.write("<p>Almost there! The correct number was: " + correctNum + "</p>");
//         document.write('<img src="images/try again.png" alt="almost correct">');
//     } else {
//         document.write("<p>You Lose. The correct number was: " + correctNum + "</p>");
//         document.write('<img src="images/you loss.png" alt="loss">');
//     }
// }

// DOM elements

guessInput = document.getElementById('guess-input');
var guessButton = document.getElementById('guess-button');

var playGameButton = document.getElementById('play-game');

var exitGameButton = document.getElementById('exit-game');

var paraElement = document.getElementById('game-status');

var mainHeading = document.getElementById('game-title');

// Variables
var secretNumber;
var attempts = 0;
var isGameActive = false;

// Start a new game
function startGame() {
    isGameActive = true;
    attempts = 0;
    secretNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    mainHeading.textContent = "Guessing Game - Try to Guess the Number!";
    paraElement.innerHTML = `<p>Guess a number between 1 to 100. You have unlimited attempts.</p>`;
    guessInput.disabled = false;
    guessButton.disabled = false;
    guessInput.value = '';
}

// Exit the game
function exitGame() {
    isGameActive = false;
    mainHeading.textContent = "Guessing Game";
    paraElement.innerHTML = `<p>Game Over! Click PLAY GAME to start again.</p>`;
    guessInput.disabled = true;
    guessButton.disabled = true;
    guessInput.value = '';
}

// Handle guess
function handleGuess(event) {
    event.preventDefault();

    if (!isGameActive) return;

    var userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert('Please enter a number between 1 and 100!');
        return;
    }

    attempts++;

    if (userGuess === secretNumber) {
        paraElement.innerHTML = `<p>Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts!</p>`;
        guessInput.disabled = true;
        guessButton.disabled = true;
    } else if (userGuess < secretNumber) {
        paraElement.innerHTML = `<p>Too low! Try again.</p>`;
    } else if (userGuess > secretNumber) {
        paraElement.innerHTML = `<p>Too high! Try again.</p>`;
    }
}

// Event listeners
playGameButton.addEventListener('click', startGame);
exitGameButton.addEventListener('click', exitGame);
guessButton.addEventListener('click', handleGuess);
