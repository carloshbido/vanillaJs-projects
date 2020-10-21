const github = new GitHub();

//UI Fields
const user = document.getElementById('user');


//Event Listeners
user.addEventListener('keyup', (e) => {

  //Inserir um Bebounce depois
  const userText = e.target.value;

  if (userText !== '') {
    github.getUser(userText)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  } else {

  }
});