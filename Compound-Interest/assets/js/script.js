var form = document.getElementById('form');
form.addEventListener('submit', handle);

function handle(e) {
    e.preventDefault();
    generateResults();
}

function generateResults(){
    let display_el = document.getElementById("results");
    let displayTable_el = document.getElementById("results-table");
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

    //Retirar ao final
    console.log(results);

    //Total applied with interest
    let resultTotalLine = results.reduce((total, result) => total + result.totalLine, 0);

    //Total gain
    let gainResults = Number(resultTotalLine).toFixed(2) - Number(totalApplied).toFixed(2);

    //Print Display
    display_el.innerHTML = `
        <p>Total do valor aplicado: <span>R$ ${Number(totalApplied).toFixed(2).replace(".",",")}</span> </p>
        <p>Total do resgate após o vencimento: <span> R$ ${Number(resultTotalLine).toFixed(2).replace(".",",")}</span></p>
        <p>Total de juros: <span> ${Number(gainResults).toFixed(2).replace(".",",")}</span></p>
        `;
    display_el.style.display = 'block';

    //Print Table
    displayTable_el.innerHTML = `
        <h4>Extrato detalhado</h4>
        <table>
            <thead> 
                <tr>
                    <th>Mês</th>
                    <th>Aporte</th>
                    <th>Juros</th>
                    <th>Total Consolidado</th>
                </tr>
            </thead>
            <tbody>
                ${results.map((result, index) => 
                `
                <tr>
                    <td>${numberMask(index + 1)}</td>
                    <td>R$ ${result.initialValue.toFixed(2).replace(".",",")}</td>
                    <td>${result.monthlyInterest.toFixed(2).replace(".",",")} %</td>
                    <td>R$ ${result.totalLine.toFixed(2).replace(".",",")}</td>
                </tr>
                `
                ).join('')}
            </tbody>
        </table>
        `;
    displayTable_el.style.display = 'block';


}

function getNumbers(id) {
    return Number(document.getElementById(id).value);
}

function numberMask(number) {
    numberLength = number.toString().length;

    if(numberLength == 1) {
        numberLength = 2;
    } 

    return ('0' + number).slice(-numberLength);
}