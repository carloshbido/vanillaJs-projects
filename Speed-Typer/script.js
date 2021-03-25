const selectDifficult = document.querySelector('#dificult');
const header = document.querySelector('header');
const buttom = document.querySelector('[data-js="button-cog"]');
const randomWord = document.querySelector('.random-word');
const wordWritting = document.querySelector('[data-js="word-writting"]')
const timeContent = document.getElementById('time-content');
const scoreContent = document.getElementById('score-content');
const gameOverUi = document.getElementById('game-over')

//Focus on main input
wordWritting.focus();

//int vars
let score = 0;
let time = 10;

// arr of words
const words = [
  'Amarelo',
  'Azul',
  'Roxo',
  'Vermelho',
  'Laranja',
  'Verde',
  'Preto',
  'Branco',
  'Cinza',
  'Marrom'
]

function addScore() {
  score++
  scoreContent.textContent = score;
};

function decrementTime() {
  timeContent.textContent = --time + 's'

  if(time <= 0) {
    clearInterval(timerLeft)
    gamerOver()
  }

}

function incrementTime() {
  const difficult = selectDifficult.value;
  
  switch (difficult) {
    case 'easy':
      time =+ 10;
      break;

    case 'medium':
      time =+ 5;
      break;
  
    default:
      time =+ 2;
      break;
  }
};

function randomWords() {
  const randomPosition = Math.floor(Math.random() * words.length);
  randomWord.textContent = words[randomPosition]

  return words[randomPosition];
}

function hideAndShowHeader() {
  header.classList.toggle('hide');
}

function checkWrittingWord(e) {
  
  let writtingWord = e.target.value.toLowerCase();
  const wordDisplayed = randomWord.textContent.toLowerCase();
  
  if(writtingWord == wordDisplayed) {
    wordWritting.focus();
    e.target.value = ''
    randomWords();
    addScore();
    incrementTime();
  }
}

function gamerOver() {
  gameOverUi.style.display = 'flex';

  gameOverUi.innerHTML = `
  <h1> Time ran out </h1>
  <button onclick='location.reload()'>Click to restart</button>
  `
}

//Events 
buttom.addEventListener('click', hideAndShowHeader)
wordWritting.addEventListener('input', checkWrittingWord)

//Init  
randomWords()
let timerLeft = setInterval(decrementTime,1000);