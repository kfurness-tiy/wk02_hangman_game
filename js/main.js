"use strict";

let guess;
let randomWord;
let state = {
  tracker: [],
  feedback: "",
  guessedLetters: [],
  mistakes: 8,
  mistakeMessage: "",
  head: 'hidden',
  neck: 'hidden',
  torso: 'hidden',
  arm1: 'hidden',
  arm2: 'hidden',
  leg1: 'hidden',
  leg2: 'hidden',
  hang: 'hidden'
}

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
  console.log(randomWord);
  return randomWord;
}

function makeTracker (randowWord) {
  state.tracker = [];
  for (var i = 0; i < randomWord.length; i++) {
    state.tracker.push(' _');
  }
}

function guessTracker (guess) {
  for(var i = 0; i < state.guessedLetters.length; i++) {
    if (' ' + guess === state.guessedLetters[i]) {
      state.feedback = 'You have already guessed that letter'
      render(state);
      return false;
    }
  }
    state.guessedLetters.push(' ' + guess);
  }


function checkGuess (guess, randomWord) {
  if (randomWord.indexOf(guess) === -1) {
    state.mistakes -= 1;
    state.mistakeMessage = 'You have ' + state.mistakes + ' mistakes left.'
    state.feedback = 'Try again';
    if (state.mistakes > -1) {
      if (state.head === 'hidden') {
        state.head = 'visible';
      } else if (state.neck === 'hidden') {
        state.neck = 'visible';
      } else if (state.torso === 'hidden') {
        state.torso = 'visible';
      } else if (state.arm1 === 'hidden') {
        state.arm1 = 'visible';
      } else if (state.arm2 === 'hidden') {
        state.arm2 = 'visible';
      } else if (state.leg1 === 'hidden') {
        state.leg1 = 'visible';
      } else if (state.leg2 === 'hidden') {
        state.leg2 = 'visible';
      } else if (state.hang === 'hidden') {
          state.hang = 'visible';
        }
    }
  } else {
    for (var i = 0; i < randomWord.length; i++) {
      if (guess === randomWord[i]) {
        state.tracker[i] = guess;
        state.feedback = 'Great guess!';
      }
    }
  }
  render(state);
}


function playerInput () {
  return document.querySelector('input').value;
}

    //Start game

function userGuess() {
  guess = playerInput(); //Takes input, calls it guess
  let check = checkGuess(guess, randomWord);
  guessTracker(guess);
  if (state.tracker.join('') === randomWord) {
    state.feedback = 'You have won this game, you lucky dog!\nThe word was: ' + randomWord;
  }
  else if (state.mistakes === 0) {
    state.feedback = 'Oh bother. You lost the game.\nThe word was: ' + randomWord;
  }
  render(state);
  return false;//bypass form default
}

function windowOnload () {
  findRandomWord();
  console.log(randomWord);
  makeTracker(randomWord);
  render(state);
}

window.onload = windowOnload();

document.querySelector('button').onclick = userGuess;
