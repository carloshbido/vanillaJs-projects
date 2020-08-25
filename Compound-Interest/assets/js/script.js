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

    //Total applied without interest 
    let totalApplied = initialValue * numberMonths;

    //Array results
    for(countMounth; countMounth <= numberMonths; countMounth++) {
        totalLine = initialValue + ((initialValue * monthlyInterest) / 100)
        results.push(
            {initialValue: Number(initialValue.toFixed(2)), 
             monthlyInterest, 
             totalLine: Number(totalLine.toFixed(2))}
            )
        initialValue = totalLine;
    }

    console.log(results);

    //Total applied with interest
    let resultTotalLine = results.reduce((total, result) => total + result.totalLine, 0);
    console.log(`Total aplicado: ${Number(totalApplied).toFixed(2)}`);
    console.log(`Total resgatado: ${Number(resultTotalLine).toFixed(2)}`);

    //Total gain
    let gainResults = Number(resultTotalLine).toFixed(2) - Number(totalApplied).toFixed(2);
    console.log(`Total de juros ganho: ${Number(gainResults).toFixed(2)}`);
}

function getNumbers(id) {
    return Number(document.getElementById(id).value);
}