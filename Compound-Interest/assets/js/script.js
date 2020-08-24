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

    let countMounth = 1;
    let results = [];

    for(countMounth; countMounth <= numberMonths; countMounth++) {
        results.push(initialValue.toFixed(2));
        initialValue = initialValue + ((initialValue * monthlyInterest) / 100);
    }

    console.log(results);

    console.log(initialValue)
    console.log(monthlyInterest)
    console.log(numberMonths)
}

function getNumbers(id) {
    return Number(document.getElementById(id).value);
}