"use strict";
// Here are the 100 most popular words in English, as totally
// stolen from here: https://gist.github.com/gravitymonkey/2406023

let randomWord = ""; // chosen in findRandomWord

var commonWords = [
  "the","and","you","that",
  "was","for","are","with","his","they",
  "this","have","from","or","one","had","by","word","but",
  "not",
  "what","all","were","when","your","can","said","there",
  "use","each","which","she","do","how","their","will",
  "other","about","out","many","then","them","these",
  "some","her","would","make","like","him","into","time",
  "has",
  "look","two","more","write","see","number","way",
  "could","people","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];

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
