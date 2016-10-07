"use strict";

let randomWord = ""; // chosen in findRandomWord


    /* Step TWO: Pass default settings for forms
    so random number/word will NOT be reset
    Also calls function playerGuess() and checkGuess()*/
function byPassDefault() {
  var guess = playerGuess();
  var response = checkGuess(guess);
  showResponse(response);
  return false;//bypass form default
}

    /* Step TWO:A Stores players input */
function playerGuess () {
  return document.querySelector('input').value;
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
  console.log(number);
  randomWord = commonWords[number];
  console.log(randomWord);
  return randomWord;
}

    /* Step ONE: when button is clikcked,
    go to the function byPassDefault */
document.querySelector('button').onclick = byPassDefault();

findRandomWord();
