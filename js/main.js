"use strict";

var randomWord = findRandomWord(); // chosen in findRandomWord

/*create function getRandomNumber to
 help choose randomWord */
function getRandomNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function showTracker (randomWord) {
  let randomLength = randomWord.length;
  console.log(randomLength);
  let tracker = "";
  for (var i=0; i < randomLength; i++) {
    tracker += "_ ";
    document.querySelector('.tracker').innerHTML = tracker;
  }
}

// choose a random word from array commonWords
function findRandomWord () {
let number = getRandomNumber(0, commonWords.length);
randomWord = commonWords[number];
showTracker(randomWord);
console.log("Random Word: " + randomWord);
return randomWord;
}

    /* Step 1-a Will put input into var guess
    (from startGuessCheck()) */
function playerInput () {
  return document.querySelector('input').value;
}

    /*Step 1-b Checking guess */
function checkGuess(guess) {
  let numberString = "0123456789"
  if (guess.indexOf(numberString)) {
    console.log('cat');
    return 'Please put in a letter';
  }
}

    /* Do not know what this does */
function showResponse(response) {
  document.querySelector('.response').innerHTML = response;
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
