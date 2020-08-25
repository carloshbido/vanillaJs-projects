var form = document.getElementById('form');

form.addEventListener('submit', handle);

function handle(e) {
    e.preventDefault();
    generateResults();
}

function generateResults(){
    let numberMonths = getNumbers('number-months');
    let initialValue = getNumbers('initial-value');
    let monthlyInterest = getNumbers('monthly-interest');
    let totalLine;
    let results = [];

    let countMounth = 1;
    //Main results
    for(countMounth; countMounth <= numberMonths; countMounth++) {
        totalLine = initialValue + ((initialValue * monthlyInterest) / 100)
        results.push(
            {initialValue: Number(initialValue.toFixed(2)), 
             monthlyInterest, 
             totalLine: Number(totalLine.toFixed(2))}
            )
        initialValue = totalLine;
    }

    //Sum de total
    let resultTotalLine = results.reduce((total, results) => total + results.totalLine, 0);

    console.log(results);
    console.log(Number(resultTotalLine));
}

function getNumbers(id) {
    return Number(document.getElementById(id).value);
}