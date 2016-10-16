"use strict";

let guess;
let guessedLetters = [];
let randomWord = 'cheese';
let tracker= [];
let mistakes = 8;

    //choose random Number

function getRandomNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

    // choose a random word from array commonWords

function findRandomWord () {
  let number = getRandomNumber(0, commonWords.length);
  randomWord = commonWords[number];
  console.log("Random Word: " + randomWord);
  return randomWord;
}

    //Creates the tracker
function makeTracker (randowWord) {
  tracker = [];
  for (var i = 0; i < randomWord.length; i++) {
    tracker.push(' _');
  }
}

// If the guess is already a letter in guess tracker, don't return it. If it is a new letter, put in array.
function guessTracker (guess) {
  // if (guessedLetters.length === 0) {
  //     guessedLetters.push(guess);
  //     document.querySelector('.guessedLetters').innerHTML = guessedLetters;
  // }
  // for(var i = 0; i < guessedLetters.length; i++) {
  //   if (guess === guessedLetters.charAt(i)) {
  //     document.querySelector('.alert').innerHTML = 'You have already guessed that letter';
  //     // return false;
  //   }
  // }
    guessedLetters.push(' ' + guess);
    console.log(guessedLetters);
    document.querySelector('.guessedLetters').innerHTML = guessedLetters;
}


function checkGuess (guess, randomWord, tracker) {
  if (randomWord.indexOf(guess) === -1) {
    mistakes -= 1;
    var msg = 'Try again';
    document.querySelector('.feedback').innerHTML = msg;
    document.querySelector('.mistakesLeft').innerHTML = 'You have ' + mistakes + ' mistakes left.';
  }
  else {
    for (var i = 0; i < randomWord.length; i++) {
      if (guess === randomWord[i]) {
        tracker[i] = guess;
        var msg = 'Great guess!'
        document.querySelector('.feedback').innerHTML = msg;
      }
    }
  }
}


function playerInput () {
  return document.querySelector('input').value;
}

function printTracker (tracker) {
    document.querySelector('.tracker').innerHTML = tracker.join(' ');
}

    //Start game

function userGuess() {
  guess = playerInput(); //Takes input, calls it guess
  let check = checkGuess(guess, randomWord, tracker);
  // mistakes(check);
  guessTracker(guess);
  printTracker(tracker);
  console.log(tracker.join(''));
  if (tracker.join('') === randomWord) {
    alert ('You have won this game, you lucky dog!\nThe word was: ' + randomWord);
  }
  else if (mistakes === 0) {
    document.querySelector('.mistakesLeft').innerHTML = 'You have ' + mistakes + ' mistakes left.';
    alert ('Oh bother. You lost the game.\nThe word was: ' + randomWord);
  }
  return false;//bypass form default
}

function windowOnload () {
  findRandomWord();
  makeTracker(randomWord);
  document.querySelector('.tracker').innerHTML = tracker.join(' ');
}

window.onload = windowOnload();

document.querySelector('button').onclick = userGuess;

/* *************Next Step ***************/
/* *************************************/
/* TODO  Check guess function, maybe switch if/else*/
/* *************************************/
/* *************************************/
