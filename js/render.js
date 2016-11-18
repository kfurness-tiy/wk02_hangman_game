function render(state) {
  renderTracker(state);
  renderFeedback(state);
  renderGuessTracker(state);
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
