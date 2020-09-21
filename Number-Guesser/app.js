// Game Config
const min = 1;
const max = 10;
const guesser = Math.floor((Math.random() * (max - min + 1) + min));
let chances = 3;

// Set range nums to html
document.querySelector('#min').textContent = min;
document.querySelector('#max').textContent = max;

// Call Event
document.querySelector('#btn').addEventListener('click', () => {

  // Get number from User
  let UIchoiced = document.querySelector('#guess');
  let choiced = parseInt(UIchoiced.value);

  // Check error from User
  if (isNaN(choiced) || choiced === '' || choiced < min || choiced > max) {

    showMessage('Insira um número correto', 'red');
    UIchoiced.value = '';

    //Check if there is a winner
  } else if (choiced === guesser) {

    showMessage('Parabéns! Você acertou!', 'green');
    UIchoiced.disabled = true;
    document.querySelector('#btn').value = 'Reiniciar';
    document.querySelector('#btn').addEventListener('click', () => location.reload());

    // Check if there are chances
  } else if (chances === 1) {

    showMessage('Game Over!', 'red')
    UIchoiced.disabled = true;
    document.querySelector('#btn').value = 'Reiniciar';
    document.querySelector('#btn').addEventListener('click', () => location.reload());

    // There are chances
  } else {

    --chances;
    showMessage(`Você possui mais ${chances} chances. Número escolhido ${choiced}`, 'blue');
    UIchoiced.value = '';

  }

})


function showMessage(msg, color) {

  // Get component Message
  const UImsg = document.querySelector('#mensagem');

  // Add text and colors to msg and input num
  UImsg.style.color = color;
  UImsg.textContent = msg;
  document.querySelector('#guess').style.borderColor = color;

}


