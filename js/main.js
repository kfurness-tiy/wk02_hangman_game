"use strict";

let state = {
  randomWord: "",
  guess: "",
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
  state.randomWord = commonWords[number];
  return state.randomWord;
}

function makeTracker () {
  state.tracker = [];
  for (var i = 0; i < state.randomWord.length; i++) {
    state.tracker.push(' _');
  }
}

function guessTracker () {
  for(var i = 0; i < state.guessedLetters.length; i++) {
    if (' ' + state.guess === state.guessedLetters[i]) {
      state.feedback = 'You have already guessed that letter'
      render(state);
      return false;
    }
  }
    state.guessedLetters.push(' ' + state.guess);
  }


function checkGuess () {
  if (state.randomWord.indexOf(state.guess) === -1) {
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
    for (var i = 0; i < state.randomWord.length; i++) {
      if (state.guess === state.randomWord[i]) {
        state.tracker[i] = state.guess;
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
  state.guess = playerInput();
  let check = checkGuess();
  guessTracker();
  if (state.tracker.join('') === state.randomWord) {
    state.feedback = 'You have won this game, you lucky dog!\nThe word was: ' + state.randomWord;
  }
  else if (state.mistakes === 0) {
    state.feedback = 'Oh bother. You lost the game.\nThe word was: ' + state.randomWord;
  }
  render(state);
  return false;//bypass form default
}

function windowOnload () {
  findRandomWord();
  makeTracker();
  render(state);
}

window.onload = windowOnload();

document.querySelector('button').onclick = userGuess;
