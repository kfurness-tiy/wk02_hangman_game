"use strict";

let guess;
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

function checkGuess (guess, randomWord, tracker) {
  for (var i = 0; i < randomWord.length; i++) {
    if (guess === randomWord[i]) {
      tracker[i] = guess;
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
/*  How to tell if someone has won  */
/* *************************************/
/* *************************************/
