document.addEventListener('DOMContentLoaded', (e) => {
  console.log('app carregado com sucesso');
})

document.querySelector('#user').addEventListener('keydown', (e) => {
  console.log(e.target.value);
});