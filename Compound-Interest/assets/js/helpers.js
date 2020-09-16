// Get Numbers
function getNumbers(id) {
    return Number(document.getElementById(id).value);
}

// Number currency
function numberMask(number) {
    numberLength = number.toString().length;

    if(numberLength == 1) numberLength = 2;
    
    return ('0' + number).slice(-numberLength);
}

// Mask´s currency
function CurrencyMask(number) {
    return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(number);
} 