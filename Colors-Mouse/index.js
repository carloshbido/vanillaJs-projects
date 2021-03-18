const circle = document.querySelector('.circle');
const header = document.querySelector('header textarea');

function changeColor(e) {

  const blue = e.offsetX - e.offsetY < 0 ? 0 : e.offsetX - e.offsetY;
  const color = `rgb(${e.offsetX},${e.offsetY},${blue})`;
  
  document.body.style.backgroundColor = color;
  header.innerHTML = color;

}

function copyColor(e){

  const circleClickedTwice = e.target.classList[0] === 'circle';

  if (circleClickedTwice) {
  
    const copyText = header;
    
    copyText.select();
    copyText.setSelectionRange(0, 99999) //For mobile
    document.execCommand('copy');

  }
};

function whiteColor() {

  const color = `rgb(255,255,255)`;

  document.body.style.backgroundColor = 'white'
  header.innerHTML = color

}


//Events
circle.addEventListener('mousemove', changeColor);
circle.addEventListener('mouseout', whiteColor);
circle.addEventListener('dblclick', copyColor);