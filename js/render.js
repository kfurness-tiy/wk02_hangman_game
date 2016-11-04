function render(state) {
  renderLost(state);
  renderWin(state);
}

function renderLost(state) {
  document.querySelector('.feedback').innerHTML = state.lost;
}

function renderWin(state) {
  document.querySelector('.feedback').innerHTML = state.won;
}
