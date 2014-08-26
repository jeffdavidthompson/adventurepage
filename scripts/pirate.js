function animateRotateButton() {
  this.style.transform = 'scale(1.3)';
  this.style.transition = 'transform 2s';
  var elBack = document.getElementById('back');
  elBack.style.background = 'linear-gradient(180deg, #f9f915, #18ea1c)';
  var elReset = document.getElementById('reset');
  elReset.style.background = 'linear-gradient(180deg, #f9f915, #18ea1c)';
}

function gradiantSpin() {
  var elReset = document.getElementById('reset');
  elReset.style.backgroundColor = 'red';

}



document.getElementById('rotate-button').addEventListener('mouseover', animateRotateButton, false);
document.getElementById('back').addEventListener('mouseover', gradiantSpin, false);
