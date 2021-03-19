//UI vars
const seats = document.querySelectorAll('.seat')
const total = document.querySelector('#total')
const filmSelected = document.querySelector('select')

//global vars
let valueFilm = filmSelected.value;

//Click Seats
seats.forEach(seat => {

  seat.addEventListener('click', (e) => {
  
    const isSeatOccupied = seat.classList.contains('occupied');

    if(!isSeatOccupied){
      seat.classList.toggle('selected')
      updateTotal()
    }
  
  })
})

// Verify quantity of seats selecteded
function updateSeatsSelected() {

  let index = 0;

  seats.forEach(element => {

    const wasClickedInsideSeats =  element.parentNode.parentNode.classList.contains('seats');
    const isSeatSelected =  element.classList.contains('selected'); 

    if (isSeatSelected && wasClickedInsideSeats)
      index = index + 1;

  });

  return index
}

//Update total $
function updateTotal() {

  const totalSeatSelected = updateSeatsSelected()
  total.textContent = valueFilm * totalSeatSelected;
  
}

//Event when user select a movie option
filmSelected.addEventListener('input', () => {

  valueFilm = filmSelected.value;
  updateTotal()

})


