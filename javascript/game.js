// Creates an array that lists out all of the options (Psychic-Game).
let computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and guesses. They start at 0.
let wins = 0;
let losses = 0;
let numGuesses = 9;
let yourGuesses = [];
let audio = new Audio('./assets/02 Shadow.m4a');

// This function is run whenever the user presses a key.
document.onkeyup = function(e) {

    // Determines which key was pressed.
    let userGuess = e.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    let lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // This logic determines the outcome of the game (win/loss), and increments the appropriate letter
        if (lettersArray.indexOf(userGuess) > -1) {

            if (userGuess === computerGuess) {
                wins++;
                numGuesses = 9;
                yourGuesses = [];
                audio.play();
            }
            if (userGuess != computerGuess) {
                numGuesses--;
                yourGuesses.push(userGuess);
                audio.pause();
            }

            if (numGuesses === 0) {
                numGuesses = 9;
                losses++;
                yourGuesses = [];

            }

            // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses.
            let html =
                "<h1>The Psychic Game</h1>" +
                "<p>What letter am I thinking of?<p>" +
                "<p>Wins: " + wins + "</p>" +
                "<p>Losses: " + losses + "</p>" +
                "<p>Guesses left: " + numGuesses + "</p>" +
                "<p>Your guesses so far: " + yourGuesses + "</p>" +
                "<p>The psychic chose: " + computerGuess + "</p>";

            // Set the inner HTML contents of the #game div to our html string
            document.querySelector("#game").innerHTML = html;

        }
};
