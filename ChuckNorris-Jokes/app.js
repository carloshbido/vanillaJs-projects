document.querySelector('#get-jokes').addEventListener('click', getJokes);
document.querySelector('#clear-jokes').addEventListener('click', clearJokes);
let UIOutput = document.querySelector('.response');

function getJokes() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

  xhr.onload = function () {
    if (this.status === 200) {

      const response = JSON.parse(this.responseText);
      UIOutput.innerHTML += `<li> <img src="${response.icon_url}"> <strong>Joke: </strong> ${response.value} </li>`;
      btnContent('Get More Jokes');

    } else {
      UIOutput.innerHTML += '<li> Erro ao processar a informação </li>';
    }

  }

  xhr.send();
}

function clearJokes() {
  UIOutput.innerHTML = '';
  btnContent('Get Jokes');
}


function btnContent(msg) {
  const UIbtnGetJokes = document.querySelector('#get-jokes');
  UIbtnGetJokes.textContent = msg;
}



