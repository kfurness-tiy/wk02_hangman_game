function render(state) {
  renderTracker(state);
  renderFeedback(state);
  renderGuessTracker(state);
  renderMistakes(state);
}

function renderTracker(state) {
  document.querySelector('.tracker').innerHTML = state.tracker.join(' ');
}

function renderFeedback(state) {
  document.querySelector('.feedback').innerHTML = state.feedback;
}

function renderGuessTracker(state) {
    document.querySelector('.guessedLetters').innerHTML = state.guessedLetters;
}

function renderMistakes(state) {
  document.querySelector('.mistakesLeft').innerHTML = state.mistakeMessage;
}
