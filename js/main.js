"use strict";

var randomWord = findRandomWord(); // chosen in findRandomWord
var mistakesLeft = 8;
var bodyCount = 0;
var splitRandomWord = randomWord.split("");
var tracker = "";
var newTracker = "";

/*create function getRandomNumber to
 help choose randomWord */
function getRandomNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


function trackerCreator (randomWord) {
  var randomLength = randomWord.length;
  tracker = "";
  for (var i=0; i < randomLength; i++) {
    tracker += "_";
  }
}

function showTracker (tracker) {
    document.querySelector('.tracker').innerHTML = tracker;
}


// choose a random word from array commonWords
function findRandomWord () {
  var correctArr = [];
  let number = getRandomNumber(0, commonWords.length);
  randomWord = commonWords[number];
  trackerCreator(randomWord);
  showTracker(tracker);
  console.log("Random Word: " + randomWord);
  createArray(correctArr);
  return randomWord;
}

function createArray (correctArr) {
  for (var i=0; i < randomWord.length; i++) {
    var total = correctArr.push(i);
  }
  console.log(correctArr);
  return correctArr;
}

/* *************WORK IN PROGRES **************** */
function correctLetter(guess) {
  console.log(guess);
  trackerCreator (randomWord);
  let newTracker = "";
  let correctSpot = splitRandomWord.indexOf(guess);
  console.log(correctSpot);
  newTracker = tracker.split(' ');
  console.log("new tracker: " + newTracker)
  newTracker.splice(0, 1, 'p');
  console.log(newTracker);
  newTracker = showTracker(newTracker);
  // for (var i = 0; i < randomWord.length; i++) {
  //   let correctSpot = splitRandomWord.indexOf(guess, i);
  //   console.log(correctSpot);
  // }
  //     if (correctSpot >= 0) {}

      // newTracker = tracker.split(' ');
      // console.log("split: " + newTracker);
      // newTracker += newTracker.splice(correctSpot, 1, guess).join('');

    // console.log(newTracker);
    // newTracker = showTracker(newTracker);
  // }
  //
  // }
}

function showMistake(mistakesMessage) {
  document.querySelector('.mistakesLeft').innerHTML = mistakesMessage;
}

function mistakeTracker() {
  mistakesLeft -= 1;
  let body = ['head', 'neck', 'arm1', 'arm2', 'torso', 'leg1', 'leg2'];
  var selectBody = body[bodyCount];
  if (mistakesLeft > 0) {
    let mistakesMessage =  "Mistakes Left: " + mistakesLeft;
    showMistake(mistakesMessage);
    document.getElementById(selectBody).style.visibility = "visible";
    bodyCount += 1;
    console.log(bodyCount);
  } else {
    let lostMessage = "I'm sorry to say that you lost. The word was: " + randomWord;
    document.querySelector('.mistakesLeft').innerHTML = lostMessage;
  }
}

    /* Shows feedback to player */
function showResponse(response) {
  document.querySelector('.response').innerHTML = response;
}

/*Step 1-b Checking guess */
function checkGuess(guess) {
let numberString = "0123456789"
guess = guess.toLowerCase();
if (numberString.indexOf(guess) >= 0) {
return 'Please put in a letter';
}
else if (guess.length > 1) {
return 'Please only type in one letter at a time.'
}
else if (splitRandomWord.indexOf(guess) === -1) {
  mistakeTracker();
  return "Wrong letter, try again."
}
else {
// var correctGuess = guess;
correctLetter(guess);
return "Good job!";
}
}

    /* Step 1-a Will put input into var guess
    (from startGuessCheck()) */
function playerInput () {
  return document.querySelector('input').value;
}

    /* Step 1: The function playerInput, gets put inside the checkGuess function (which will be give var guess) */
function startGuessCheck() {
  var guess = playerInput(); //Takes input, calls it guess
  var response = checkGuess(guess);
    /* checkGuess will return a response based on the answer
    and that feedback provided will go to this function and
    print on the HTML */
  showResponse(response);
  return false;//bypass form default
}


    /* Step ONE: when button is clikcked,
    go to the function byPassDefault */
document.querySelector('button').onclick = startGuessCheck;
