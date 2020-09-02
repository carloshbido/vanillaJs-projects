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