"use strict";

let randomWord = ""; // chosen in findRandomWord

    /* Step 1-a Will put input into var guess
    (from startGuessCheck()) */
function playerInput () {
  return document.querySelector('input').value;
}

    /*Step 1-b Checking guess */
function checkGuess(guess) {

}

    /* Do not know what this does */
function showResponse(response) {
  document.querySelector('.response').innerHTML = response;
}

    /* Step 1: The function playerInput, gets put inside the checkGuess function (which will be give var guess) */
function startGuessCheck() {
  var guess = playerInput(); //Takes input, calls it guess
  console.log(guess);
  // var response = checkGuess(guess);
      /* Have no idea what this does.
      Did not add function from game example...*/
  // showResponse(response);
  return false;//bypass form default
}







    /*create function getRandomNumber to
     help choose randomWord */
function getRandomNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

    // choose a random word from array commonWords
function findRandomWord () {
  let number = getRandomNumber(0, commonWords.length);
  randomWord = commonWords[number];
  console.log(randomWord);
  return randomWord;
}

    /* Step ONE: when button is clikcked,
    go to the function byPassDefault */
document.querySelector('button').onclick = startGuessCheck;

findRandomWord();
