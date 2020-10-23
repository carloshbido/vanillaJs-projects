// Instances
const github = new GitHub();

//UI Fields
const UI_User = document.getElementById('user');
const UI_Avatar = document.querySelector('.avatar');
const UI_Name = document.querySelector('.name');
const UI_Country = document.querySelector('.country');
const UI_Url = document.querySelector('.url');
const UI_Followers = document.querySelector('.followers');
const UI_Following = document.querySelector('.following');
const UI_CardResponse = document.querySelector('#card-response');
const UI_CardNotFound = document.querySelector('#user-notFound');

//vars
let time = 1000;

//Event Listeners
user.addEventListener('keyup', handleKeyUp);

//Functions
function findProfile(userText) {
  if (userText !== '') {

    //Get data
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {

          UI_CardResponse.setAttribute('hidden', '');
          UI_CardNotFound.removeAttribute('hidden');
          UI_CardNotFound.classList.add('not-found');
          UI_CardNotFound.textContent = 'Usuário não encontrado';

          console.log(UI_CardResponse)

        } else {

          //UI contents
          UI_CardNotFound.setAttribute('hidden', '');
          UI_CardResponse.removeAttribute('hidden');

          //Input datas on UI
          UI_Avatar.setAttribute('src', data.profile.avatar_url);
          UI_Name.textContent = data.profile.name;
          UI_Country.textContent = data.profile.location;
          UI_Url.textContent = data.profile.html_url;
          UI_Followers.innerHTML = `<strong>Followers: </strong> ${data.profile.followers}`;
          UI_Following.innerHTML = `<strong>Following: </strong> ${data.profile.following}`;
          UI_Avatar.style.width = '100px';
        }
      })
      .catch(err => console.log(err));

  } else {

    clearFields();
    UI_CardResponse.setAttribute('hidden', '');

  }
}

function handleKeyUp(event) {

  clearTimeout(time);

  time = setTimeout(() => {
    findProfile(event.target.value);
  }, 500);

}

function clearFields() {
  UI_Avatar.setAttribute('src', '');
  UI_Name.textContent = '';
  UI_Country.textContent = '';
  UI_Url.textContent = '';
  UI_Followers.innerHTML = '';
  UI_Following.innerHTML = '';
}