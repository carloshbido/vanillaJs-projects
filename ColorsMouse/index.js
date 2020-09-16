const square = document.querySelector('.square');

square.addEventListener('mousemove', changeColor);
square.addEventListener('mouseout', whiteColor);

function changeColor(e) {
  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY} ,40)`
}

function whiteColor() {
  document.body.style.backgroundColor = 'white'
}