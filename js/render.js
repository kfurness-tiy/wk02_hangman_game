function render(state) {
  renderLost(state);
  renderWin(state);
  renderTracker(state);
  renderFeedback(state);
}

function renderLost(state) {
  document.querySelector('.feedback').innerHTML = state.lost;
}

function renderWin(state) {
  document.querySelector('.feedback').innerHTML = state.won;
}

function renderTracker(state) {
  document.querySelector('.tracker').innerHTML = state.tracker.join(' ');
}

function renderFeedback(state) {
  document.querySelector('.feedback').innerHTML = state.feedback;
}
