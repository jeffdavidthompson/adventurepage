
var elPopupBack = document.getElementById('popup-back');
var elPopupReset = document.getElementById('popup-reset');

function displayBackText() {
  elPopupBack.style.display = 'block';
}

function displayResetText() {
  elPopupReset.style.display = 'block';
}

function hideBackText() {
  elPopupBack.style.display = 'none';
}

function hideResetText() {
  elPopupReset.style.display = 'none';
}

// event listeners
document.getElementById('back').addEventListener('mouseover', displayBackText, false);
document.getElementById('back').addEventListener('mouseout', hideBackText, false);
document.getElementById('reset').addEventListener('mouseover', displayResetText, false);
document.getElementById('reset').addEventListener('mouseout', hideResetText, false);
