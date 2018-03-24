/* ////////////////////////// HANGMAN GAME ///////////////////////////  */

// Player is presented with a number of blanks / underscores.
// Player is presented with the directions "Type a letter to begin."
// Player is presented with a number of games won and a number of games lost.
// Player is presented with number of guesses left.
// The player must type a letter.
// If a player types a letter, the following will occur:
   // 1. IF the letter matches one of the letters in the word to guess, the letter replaces that underscore in the word to guess
         // and guesses remaining goes down one
   // 2. IF the letter does not match one of the letters in the word to guess, the letter shows up in the guessed section.
         // and guesses remaining goes down one
   // 3. IF the letter is in the list of letters already guessed (or has been guessed in the word already) nothing will happen.
   // 4. IF the letter is the last to be guessed, the player has won. Show this somehow, and reset the game.

// Nice to Haves:
   // 1. 


/* ////////////////////////// THE GAME ///////////////////////////*/ 

var hangmanGame = {
    guessesLeft: 15,
    winCount: 0,
    lossCount: 0,
    words: ["cat", "dog", "bird"],
    letters: [],
    guessedLetters: [],
    blanks: [],
    song: "assets/sound/music.mp3",
    randomWord: "",
    guessCharacter: ""
}

function initializeGame() {
    // playGameSounds(hangmanGame.song);
     resetGame();
}

function resetGame() {
    hangmanGame.guessesLeft = 15;
    console.log("Guesses left: " + hangmanGame.guessesLeft);
    chooseRandomWord();
    splitRandomWord();
    makeBlanks();
}

function chooseRandomWord() {
    hangmanGame.randomWord = hangmanGame.words[Math.floor(Math.random() * hangmanGame.words.length)]
    console.log("Random word is " + hangmanGame.randomWord)
}

function splitRandomWord() {
    hangmanGame.letters = hangmanGame.randomWord.split('');
    console.log("The letters are: " + hangmanGame.letters)
}

function makeBlanks() {
    // replace all the letters from random word and push into blanks[]
    for(i = 0; i < hangmanGame.letters.length; i++) {
         hangmanGame.blanks.push('_')
        }
    // show blanks in dom
    console.log("The blank letters are: " + hangmanGame.blanks)
}

document.onkeydown = function receiveGuess() {
    playGameSounds("assets/sound/click.wav");
    hangmanGame.guessCharacter = event.key;
    console.log("Guess is " + hangmanGame.guessCharacter)
    handleGuess()
}

function handleGuess() {
    hangmanGame.guessesLeft--;
    console.log("Now number of guesses = " + hangmanGame.guessesLeft);
    if(hangmanGame.guessesLeft <= 0) {
        handleLoss()
    }
    // check against letters - if last correct letter of letters, handleWin() USE INDEXOF!
    for (i = 0; i < hangmanGame.letters.length; i++) { 
        if(hangmanGame.letters[i] == hangmanGame.guessCharacter){
            console.log("It's a match with " + hangmanGame.letters[i] + "!")
            revealGuess(hangmanGame.letters[i])
        }
        else {
            
        }
        // if letter matches, find index of matching letter, and put it in the right spot in the blanks array
    }
    // add to hangManGame.guessedLetters OR 
    // show correct letter in the DOM
}

function revealGuess(correctGuess) {
    for(i = 0; i < hangmanGame.letters.length; i++) {
        
        var matchIndex = [i];
        
        if(hangmanGame.letters[i] == hangmanGame.guessCharacter){
            hangmanGame.blanks[matchIndex] = correctGuess;
        }
    }
    console.log("After guessing, the blank letters are: " + hangmanGame.blanks)
}

function handleWin() {
    // show win module
    // resetGame()
}

function handleLoss() {
    // show lose module
    console.log("well, you lose.");
    resetGame()
}

function playGameSounds(soundFile){
    var audio = new Audio(soundFile);
    audio.play();
}

initializeGame();