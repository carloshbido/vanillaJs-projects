document.querySelector('#loan-form').addEventListener('submit', (e) => {

  e.preventDefault();
  document.querySelector('#results').style.display = 'none';
  
  // Display spinner 
  const spinner = document.querySelector('#spinner');
  spinner.style.display = 'block';
  spinner.className = 'spinner-border text-secondary mx-auto mt-3';

  setTimeout(() => showResults(), 2000);

});


function calculateLoan() {

  // Get UI vars
  const UIamount = document.querySelector('#amount');
  const UIinterest = document.querySelector('#interest');
  const UIyears = document.querySelector('#years');

  // Get Results vars
  const UImonthlyPayment = document.querySelector('#monthly-payment');
  const UItotalPayment = document.querySelector('#total-payment');
  const UItotalInterest = document.querySelector('#total-interest');

  // Converted vars
  const principal = parseFloat(UIamount.value);
  const calculatedInterest = parseFloat(UIinterest.value) / 100 / 12;
  const calculatedPayments = parseFloat(UIyears.value) * 12;

  //monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x-1);

  //Decision to error or show values
  if(isFinite(monthly)) {
    UImonthlyPayment.value = monthly.toFixed(2);
    UItotalPayment.value = (monthly * calculatedPayments).toFixed(2);
    UItotalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

    document.querySelector('#results').style.display = 'block';
  } else {
    showAlert('Por favor, verifique os dados cadastrados')
  }

}

function showAlert(message) {
    //create Div
    const div = document.createElement('div');
    div.className = 'alert alert-danger'
    div.appendChild(document.createTextNode(message));

    //Get DOM Elements to append
    const card = document.querySelector('.card');
    const form = document.querySelector('#loan-form');

    // Include message at DOM
    card.insertBefore(div, form);

    // Hide result Fields
    document.querySelector('#results').style.display = 'none';
  
    // Vanish message after 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 2000);

}


function showResults() {
  document.querySelector('#spinner').style.display = 'none';
  calculateLoan();
}