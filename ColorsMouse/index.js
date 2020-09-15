const square = document.querySelector('.square');
square.addEventListener('mousemove', changeColor);

function changeColor(e) {
  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY} ,40)`
}