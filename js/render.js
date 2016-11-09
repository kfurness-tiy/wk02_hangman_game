function render(state) {
  renderTracker(state);
  renderFeedback(state);
}

function renderTracker(state) {
  document.querySelector('.tracker').innerHTML = state.tracker.join(' ');
}

function renderFeedback(state) {
  document.querySelector('.feedback').innerHTML = state.feedback;
}
