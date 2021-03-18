const square = document.querySelector('.square');
const header = document.querySelector('header');

function changeColor(e) {
  const blue = e.offsetX - e.offsetY < 0 ? 0 : e.offsetX - e.offsetY;
  const color = `rgb(${e.offsetX},${e.offsetY},${blue})`;
  document.body.style.backgroundColor = color;
  header.innerHTML = color
}

function whiteColor() {
  const color = `rgb(255,255,255)`;
  document.body.style.backgroundColor = 'white'
  header.innerHTML = color
}

square.addEventListener('mousemove', changeColor);
square.addEventListener('mouseout', whiteColor);