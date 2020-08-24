var form = document.getElementById('form');

form.addEventListener('submit', handle);

function handle(e) {
    e.preventDefault();
    doSubmit();
}

function doSubmit(){
    let initialValue = getNumbers('initial-value');
    let monthlyInterest = getNumbers('monthly-interest')
    let numberMonths = getNumbers('number-months')

    console.log(initialValue)
    console.log(monthlyInterest)
    console.log(numberMonths)
}

function getNumbers(id) {
    return Number(document.getElementById(id).value);
}