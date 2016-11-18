function render(state) {
  renderTracker(state);
  renderFeedback(state);
  renderGuessTracker(state);
  renderMistakes(state);
  renderHead(state);
  renderNeck(state);
  renderTorso(state);
  renderArm1(state);
  renderArm2(state);
  renderLeg1(state);
  renderLeg2(state);
  renderHang(state);
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

function renderHead(state) {
  document.getElementById('head').style.visibility = state.head;
}

function renderNeck(state) {
  document.getElementById('neck').style.visibility = state.neck;
}

function renderTorso(state) {
  document.getElementById('torso').style.visibility = state.torso;
}
function renderArm1(state) {
  document.getElementById('arm1').style.visibility = state.arm1;
}

function renderArm2(state) {
  document.getElementById('arm2').style.visibility = state.arm2;
}

function renderLeg1(state) {
  document.getElementById('leg1').style.visibility = state.leg1;
}

function renderLeg2(state) {
  document.getElementById('leg2').style.visibility = state.leg2;
}

function renderHang(state) {
  document.getElementById('hang').style.visibility = state.hang;
}
