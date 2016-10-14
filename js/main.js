"use strict";

let guess;
let guessedLetters = '';
let randomWord;
let tracker= [];


// var randomWord = findRandomWord(); // chosen in findRandomWord

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
  // TODO  make if statement with undefined
  for(var i = 0; i <= guessedLetters.length; i++) {
    console.log(guessedLetters.length);
    if(guess !== guessedLetters.charAt(i)) {
      guessedLetters += guess;
      console.log('guessed: ' + guessedLetters);
      return guessedLetters;
    }
    else {
      return false;
    }
  }
}
  // if (guessedLetters === undefined) {
  //   guessedLetters = [];
  //   guessedLetters[0] = guess;
  // }
  // else if(guess.length = 1)
  //   for (var i = 0; i < guessedLetters.length; i++) {
  //       console.log('test: ' + guess);
  //     //same letter is in guessedLetters already
  //     // (if guess === guessedLetters[i]) {
  //     }


function checkGuess (guess, randomWord, tracker) {
  for (var i = 0; i < randomWord.length; i++) {
    if (guess === randomWord[i]) {
      tracker[i] = guess;
      return true;
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
  printTracker(tracker);
  guessTracker(guess);
  console.log(tracker.join(''));
  if (tracker.join('') === randomWord) {
    alert ('You have won this game, you lucky dog!');
  }
  // showResponse(response);
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
/* TODO  Refactor */
/* *************************************/
/* *************************************/
